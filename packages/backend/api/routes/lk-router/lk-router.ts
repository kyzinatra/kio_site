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
    createTaskController,
    getNotApprovedTasksListController,
    getNotApprovedTasksListValidator,
    approveTaskController,
    changePasswordController,
    changePasswordValidator,
    changeRoleController,
    changeRoleValidator,
    createTaskValidator,
    approveTaskValidator
} from '../../controllers';

import { controllerErrorBounding } from '../../../domain/errors';
import { apiRouter } from '../api-router';
import { updateTaskController, updateTaskValidator } from '../../controllers/lk/update-task';

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

apiRouter.get(
    QUERY_KEYS.GET_NOT_APPROVED_TASKS_LIST,
    validationMiddleware([], getNotApprovedTasksListValidator),
    controllerErrorBounding(getNotApprovedTasksListController)
);

apiRouter.post(
    QUERY_KEYS.CREATE_TASK,

    validationMiddleware(
        [check('name').isString(), check('description').isString(), check('settings').isObject().optional()],
        createTaskValidator
    ),

    controllerErrorBounding(createTaskController)
);

apiRouter.post(
    QUERY_KEYS.UPDATE_TASK,

    validationMiddleware(
        [check('name').isString(), check('description').isString(), check('settings').isObject().optional()],
        updateTaskValidator
    ),

    controllerErrorBounding(updateTaskController)
);

apiRouter.post(
    QUERY_KEYS.APPROVE_TASK,

    validationMiddleware([check('taskId').isString()], approveTaskValidator),

    controllerErrorBounding(approveTaskController)
);

export { lkRouter };
