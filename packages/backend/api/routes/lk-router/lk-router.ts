import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';

import { setDisplayNameController } from '../../controllers/set-display-name';
import { setFullNameValidator } from '../../controllers/set-full-name/set-full-name.validator';
import { setFullNameController } from '../../controllers';
import { setAvatarController } from '../../controllers/set-avatar';
import { signAvatarValidator } from '../../controllers/set-avatar/set-avatar.validator';

const lkRouter = Router();

lkRouter.post(
    QUERY_KEYS.SET_FULL_NAME,
    validationMiddleware([check('name').isString(), check('surname').isString()], setFullNameValidator),
    setFullNameController
);

lkRouter.post(
    QUERY_KEYS.SET_DISPLAY_NAME,
    validationMiddleware([check('displayName').isString()]),
    setDisplayNameController
);

lkRouter.post(QUERY_KEYS.SET_AVATAR, validationMiddleware([], signAvatarValidator), setAvatarController);

export { lkRouter };
