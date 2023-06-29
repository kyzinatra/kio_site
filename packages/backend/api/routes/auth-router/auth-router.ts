import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys/';
import { validationMiddleware } from '../../../domain/middleware/validation-middleware';
import { check } from 'express-validator';
import { signUpController } from '../../controllers';
import { signUpValidator } from '../../controllers';
import { signInValidator } from '../../controllers';
import { signInController } from '../../controllers';
import { meController } from '../../controllers';

const authRouter = Router();

authRouter.post(
    QUERY_KEYS.SIGN_UP,
    validationMiddleware(
        [
            check('name').isString(),
            check('surname').isString(),
            check('email').isEmail(),
            check('password').isString()
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

export { authRouter };
