import { CLIENT_ERRORS } from '../errors/client-errors';
import { Response, NextFunction } from 'express';
import { QUERY_WITHOUT_AUTH } from '../../api/query-keys/query-keys';
import jwt from 'jsonwebtoken';
import { secret } from '../../secret';
import { CustomRequest } from '../types/custom-request';
import { IRefreshPayload } from '../../api/executors/refresh-token/refresh-token.types';

export const authMiddleware = <T>(req: CustomRequest<T>, resp: Response, next: NextFunction): void => {
    if (req.method === 'OPTIONS' || QUERY_WITHOUT_AUTH.includes(req.path)) return next();

    try {
        const token = req.cookies.refreshToken;

        if (!token) {
            resp.status(CLIENT_ERRORS.UNAUTHORIZED.code).json(CLIENT_ERRORS.UNAUTHORIZED);
            return next();
        }

        const { _id } = jwt.verify(token, secret) as IRefreshPayload;
        req._id = _id;
        next();
    } catch (e) {
        if ((e as Error).name === 'TokenExpiredError') {
            resp.status(CLIENT_ERRORS.TOKEN_EXPIRED.code).json(CLIENT_ERRORS.TOKEN_EXPIRED);
            return;
        }

        resp.status(CLIENT_ERRORS.BAD_TOKEN.code).json(CLIENT_ERRORS.BAD_TOKEN);
    }
};
