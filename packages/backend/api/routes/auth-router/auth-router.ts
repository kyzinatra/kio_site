import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys/';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';
import {
    signUpValidator,
    signInValidator,
    signInController,
    meController,
    logoutController,
    signUpController
} from '../../controllers';

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
