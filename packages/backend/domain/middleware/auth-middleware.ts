import { CLIENT_ERRORS } from '../errors/client-errors';
import { Response, NextFunction } from 'express';
import { QUERY_WITHOUT_AUTH } from '../../api/query-keys/query-keys';
import jwt from 'jsonwebtoken';
import { secret } from '../../secret';
import { CustomRequest } from '../types/custom-request.type';
import { IRefreshPayload } from '../../api/executors/refresh-token/refresh-token.types';

export const authMiddleware = <T>(req: CustomRequest<T>, resp: Response, next: NextFunction): void => {
    if (req.method === 'OPTIONS') {
        next();
        return;
    }

    const isQueryWithoutAuth = QUERY_WITHOUT_AUTH.includes(req.path);

    if (isQueryWithoutAuth) {
        next();
        return;
    }

    try {
        const token = req.cookies.refreshToken;

        if (!token) {
            resp.status(CLIENT_ERRORS.UNAUTHORIZED.code).json(CLIENT_ERRORS.UNAUTHORIZED);
        } else {
            const decodedToken = jwt.verify(token, secret) as IRefreshPayload;
            req._id = decodedToken._id;

            next();
        }
    } catch (e) {
        if ((e as Error).name === 'TokenExpiredError') {
            resp.status(CLIENT_ERRORS.TOKEN_EXPIRED.code).json(CLIENT_ERRORS.TOKEN_EXPIRED);
        }

        resp.status(CLIENT_ERRORS.BAD_TOKEN.code).json(CLIENT_ERRORS.BAD_TOKEN);
    }
};
