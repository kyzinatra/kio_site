import { CLIENT_ERRORS } from '../errors/client-errors';
import { Response, NextFunction } from 'express';
import { QUERY_WITHOUT_AUTH } from '../../api/query-keys/query-keys';
import { CustomRequest } from '../types/custom-request.type';
import { User } from '../../bd';
import { IUserBD } from '../../bd/types/user-bd.interface';
import { SERVER_ERRORS } from '../errors/server-errors';
import { TOKEN_COLLECTION } from '../token/token-collection';
import { tokenService } from '../token';

export const authMiddleware = async <T>(
    req: CustomRequest<T>,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    if (req.method === 'OPTIONS' || QUERY_WITHOUT_AUTH.includes(req?.path ?? '')) {
        next();
        return;
    }

    resp.write;

    const token = req.signedCookies[TOKEN_COLLECTION.REFRESH_TOKEN];

    if (!token) {
        resp.status(CLIENT_ERRORS.UNAUTHORIZED.code).json(CLIENT_ERRORS.UNAUTHORIZED);
        return;
    }

    const tokenInfo = tokenService.verifyRefresh({
        ip: req.ip,
        browser: req.headers['user-agent'] ?? '',
        token: token
    });

    if (tokenInfo.error) {
        resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
        resp.status(tokenInfo.error.code).json(tokenInfo.error);
        return;
    }

    let user: IUserBD | null;

    try {
        user = await User.findOne({ _id: tokenInfo.decodedToken._id });
    } catch {
        resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
        resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
        return;
    }

    if (!user) {
        resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
        resp.status(CLIENT_ERRORS.UNAUTHORIZED.code).json(CLIENT_ERRORS.UNAUTHORIZED);
    }

    req.user = user;

    next();
};
