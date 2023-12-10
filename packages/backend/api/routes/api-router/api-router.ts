import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';

import {
    createTaskController,
    getCurrentSolutionController,
    startSolutionController,
    commitController
} from '../../controllers';
import { controllerErrorBounding } from '../../../domain/errors';

const apiRouter = Router();

apiRouter.post(
    QUERY_KEYS.CREATE_TASK,

    validationMiddleware([
        check('name').isString(),
        check('description').isString(),
        check('isAvailable').isBoolean().optional(),
        check('preview').isString().optional(),
        check('settings').isObject().optional()
    ]),

    controllerErrorBounding(createTaskController)
);

apiRouter.post(
    QUERY_KEYS.GET_CURRENT_SOLUTION,

    validationMiddleware([check('taskId').isString()]),

    controllerErrorBounding(getCurrentSolutionController)
);

apiRouter.post(
    QUERY_KEYS.START_SOLUTION,

    validationMiddleware([check('taskId').isString()]),

    controllerErrorBounding(startSolutionController)
);

apiRouter.post(
    QUERY_KEYS.COMMIT,

    validationMiddleware([
        check('taskId').isString(),
        check('tryId').isString(),
        check('parentId').isString(),
        check('state').isObject(),
        check('result').isObject(),
        check('comment').isString().optional()
    ]),

    controllerErrorBounding(commitController)
);

export { apiRouter };
