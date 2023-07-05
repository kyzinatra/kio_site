import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';

import { setDisplayNameController } from '../../controllers';
import { setFullNameValidator } from '../../controllers';
import { setFullNameController } from '../../controllers';
import { setAvatarController } from '../../controllers';

const lkRouter = Router();

lkRouter.post(
    QUERY_KEYS.SET_FULL_NAME,
    validationMiddleware(
        [check('name').isString(), check('surname').isString(), check('patronymic').isString()],
        setFullNameValidator
    ),
    setFullNameController
);

lkRouter.post(
    QUERY_KEYS.SET_DISPLAY_NAME,
    validationMiddleware([check('displayName').isString()]),
    setDisplayNameController
);

lkRouter.post(QUERY_KEYS.SET_AVATAR, setAvatarController);

export { lkRouter };
