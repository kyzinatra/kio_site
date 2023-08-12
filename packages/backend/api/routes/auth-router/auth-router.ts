import { Router } from 'express';
import { QUERY_KEYS } from '#api/query-keys';
import { check } from 'express-validator';

import {
    logoutController,
    meController,
    signInController,
    signInValidator,
    signUpController,
    signUpValidator
} from '#api/controllers';

import { validationMiddleware } from '#domain/middleware';

const authRouter = Router();

authRouter.post(
    QUERY_KEYS.SIGN_UP,
    validationMiddleware(
        [
            check('name').isString(),
            check('surname').isString(),
            check('email').isEmail(),
            check('password').isString(),
            check('role').isString()
        ],
        signUpValidator
    ),
    signUpController
);

authRouter.post(
    QUERY_KEYS.SIGN_IN,
    validationMiddleware([check('email').isEmail(), check('password').isString()], signInValidator),
    signInController
);

authRouter.get(QUERY_KEYS.ME, meController);
authRouter.post(QUERY_KEYS.LOGOUT, logoutController);

export { authRouter };
