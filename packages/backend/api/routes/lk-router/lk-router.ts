import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';

import {
    setDisplayNameController,
    setFullNameValidator,
    setFullNameController,
    setAvatarController,
    setAvatarValidator,
    changePasswordValidator,
    changePasswordController,
    changeRoleController,
    changeRoleValidator
} from '../../controllers';

import { controllerErrorBounding } from '../../../domain/errors';

const lkRouter = Router();

lkRouter.post(
    QUERY_KEYS.SET_FULL_NAME,
    validationMiddleware([check('name').isString(), check('surname').isString()], setFullNameValidator),
    controllerErrorBounding(setFullNameController)
);

lkRouter.post(
    QUERY_KEYS.SET_DISPLAY_NAME,
    validationMiddleware([check('displayName').isString()]),
    controllerErrorBounding(setDisplayNameController)
);

lkRouter.post(QUERY_KEYS.SET_AVATAR, validationMiddleware([], setAvatarValidator), setAvatarController);

lkRouter.post(
    QUERY_KEYS.CHANGE_PASSWORD,
    validationMiddleware(
        [check('oldPassword').isString(), check('newPassword').isString()],
        changePasswordValidator
    ),
    controllerErrorBounding(changePasswordController)
);

lkRouter.post(
    QUERY_KEYS.CHANGE_ROLE,
    validationMiddleware([check('role').isString(), check('userId').isString()], changeRoleValidator),
    controllerErrorBounding(changeRoleController)
);

export { lkRouter };
