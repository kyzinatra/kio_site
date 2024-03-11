import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';

import {
    startSolutionController,
    getTasksListController,
    getTaskValidator,
    getTaskController
} from '../../controllers';
import { controllerErrorBounding } from '../../../domain/errors';

const siteRouter = Router();

siteRouter.get(
    QUERY_KEYS.GET_TASKS_LIST,

    controllerErrorBounding(getTasksListController)
);

siteRouter.post(
    QUERY_KEYS.GET_TASK,

    validationMiddleware([check('taskId').isString()], getTaskValidator),

    controllerErrorBounding(getTaskController)
);

export { siteRouter };
