import { validationResult } from 'express-validator';
import { CLIENT_ERRORS } from '../errors/client-errors';
import { Request, Response } from 'express';
import { Middleware } from 'express-validator/src/base';
import { TValidator } from '../types/validator.type';

export const validationMiddleware = <T>(checks: Middleware[] = [], validator?: TValidator<T>) => {
    return async (req: Request, resp: Response, next: () => void) => {
        for (let i = 0; i < checks.length; i++) {
            const checkFn = checks[i];
            await checkFn?.(req, resp, () => {});
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return resp.status(CLIENT_ERRORS.BAD_DTO.code).json({
                ...CLIENT_ERRORS.BAD_DTO,
                errors: errors.array()
            });
        }

        const error = await validator?.(req);

        if (error) {
            return resp.status(error.code).json(error);
        }

        next();
    };
};
