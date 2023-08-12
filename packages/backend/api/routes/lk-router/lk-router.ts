import { Router } from 'express';

import { QUERY_KEYS } from '#api/query-keys';

import { validationMiddleware } from '#domain/middleware';
import { check } from 'express-validator';

import {
    changePasswordController,
    changePasswordValidator,
    changeRoleController,
    changeRoleValidator,
    setAvatarController,
    setAvatarValidator,
    setDisplayNameController,
    setFullNameController,
    setFullNameValidator
} from '#api/controllers';

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

lkRouter.post(QUERY_KEYS.SET_AVATAR, validationMiddleware([], setAvatarValidator), setAvatarController);

lkRouter.post(
    QUERY_KEYS.CHANGE_PASSWORD,
    validationMiddleware(
        [check('oldPassword').isString(), check('newPassword').isString()],
        changePasswordValidator
    ),
    changePasswordController
);

lkRouter.post(
    QUERY_KEYS.CHANGE_ROLE,
    validationMiddleware([check('role').isString(), check('userId').isString()], changeRoleValidator),
    changeRoleController
);

export { lkRouter };
