import { NextFunction, Response } from 'express';
import { CustomRequest } from '../types';
import { SERVER_ERRORS } from '../errors';

export const errorBoundingMiddleware = async <T>(
    err: Error,
    req: CustomRequest<T>,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    console.error('errorBoundingMiddleware', err.stack);
    resp.status(SERVER_ERRORS.SOMETHING_WENT_WRONG.code).json(SERVER_ERRORS.SOMETHING_WENT_WRONG);

    next();
};
