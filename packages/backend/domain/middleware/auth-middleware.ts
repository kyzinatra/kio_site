import { CLIENT_ERRORS } from '../errors/client-errors';
import { Response, NextFunction } from 'express';
import { QUERY_WITHOUT_AUTH } from '../../api/query-keys/query-keys';
import { CustomRequest } from '../types/custom-request.type';
import { User } from '../../bd';
import { IUserBD } from '../../bd/types/user-bd.interface';
import { SERVER_ERRORS } from '../errors/server-errors';
import { TOKEN_COLLECTION } from '../token/token-collection';
import { keycloakApi } from '../../keycloak/api/keycloakApi';

export const authMiddleware = async <T>(
    req: CustomRequest<T>,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    if (req.method === 'OPTIONS') {
        next();
        return;
    }

    await keycloakApi['self-login']();

    if (QUERY_WITHOUT_AUTH.includes(req?.path ?? '')) {
        next();
        return;
    }

    const accessToken = req.signedCookies[TOKEN_COLLECTION.ACCESS_TOKEN];
    const refreshToken = req.signedCookies[TOKEN_COLLECTION.REFRESH_TOKEN];

    if (!accessToken && !refreshToken) {
        resp.status(CLIENT_ERRORS.UNAUTHORIZED.code).json(CLIENT_ERRORS.UNAUTHORIZED);
        return;
    }

    let tokenInfo = await keycloakApi['introspect-user-access-token']({ token: accessToken });

    if (!tokenInfo.active) {
        const refreshResult = await keycloakApi['refresh-user-access-token']({ refresh_token: refreshToken });

        if (refreshResult.error) {
            resp.clearCookie(TOKEN_COLLECTION.ACCESS_TOKEN);
            resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
            resp.status(400).json(tokenInfo.error);

            return;
        } else {
            resp.cookie(TOKEN_COLLECTION.ACCESS_TOKEN, refreshResult.access_token, {
                httpOnly: true,
                signed: true,
                sameSite: true
            });
            resp.cookie(TOKEN_COLLECTION.ACCESS_TOKEN, refreshResult.refresh_token, {
                httpOnly: true,
                signed: true,
                sameSite: true
            });

            keycloakApi['user-logout']({ refresh_token: refreshToken });

            tokenInfo = await keycloakApi['introspect-user-access-token']({
                token: refreshResult.access_token
            });
        }
    }

    let user: IUserBD | null;

    try {
        user = await User.findOne({ email: tokenInfo.email });
    } catch {
        resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
        resp.clearCookie(TOKEN_COLLECTION.ACCESS_TOKEN);
        resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
        return;
    }

    if (!user) {
        resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
        resp.clearCookie(TOKEN_COLLECTION.ACCESS_TOKEN);
        resp.status(CLIENT_ERRORS.UNAUTHORIZED.code).json(CLIENT_ERRORS.UNAUTHORIZED);
    }

    req.user = user;

    next();
};
