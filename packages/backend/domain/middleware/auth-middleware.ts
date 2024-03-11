import { CLIENT_ERRORS } from '../errors';
import { Response, NextFunction } from 'express';
import { QUERY_WITHOUT_AUTH } from '../../api/query-keys/query-keys';
import { CustomRequest } from '../types';
import { User } from '../../bd';
import { IUserBD } from '../../bd';
import { SERVER_ERRORS } from '../errors';
import { TOKEN_COLLECTION } from '../token/token-collection';
import { keycloakApi } from '../../keycloak/api';
import { setAuthTokens } from '../token/token-service';

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

            resp.status(CLIENT_ERRORS.BAD_TOKEN.code).json(CLIENT_ERRORS.BAD_TOKEN);

            return;
        } else {
            setAuthTokens({
                refresh_token: refreshResult.refresh_token,
                access_token: refreshResult.access_token,
                resp
            });

            tokenInfo = await keycloakApi['introspect-user-access-token']({
                token: refreshResult.access_token
            });
        }
    }

    let user: (IUserBD & { _id: string }) | null;

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
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXISTS.code).json(CLIENT_ERRORS.USER_DOESNT_EXISTS);

        return;
    }

    req.user = user;

    next();
};
