import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';

import {
    getCurrentSolutionController,
    startSolutionController,
    commitController,
    newTryController,
    switchTryController,
    switchHeadFrameController
} from '../../controllers';
import { controllerErrorBounding } from '../../../domain/errors';

const apiRouter = Router();

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

apiRouter.post(
    QUERY_KEYS.NEW_TRY,
    validationMiddleware([check('taskId').isString(), check('name').isString().optional()]),
    controllerErrorBounding(newTryController)
);

apiRouter.post(
    QUERY_KEYS.SWITCH_TRY,
    validationMiddleware([check('taskId').isString(), check('tryId').isString()]),
    controllerErrorBounding(switchTryController)
);

apiRouter.post(
    QUERY_KEYS.SWITCH_HEAD_FRAME,
    validationMiddleware([
        check('taskId').isString(),
        check('tryId').isString(),
        check('frameId').isString()
    ]),
    controllerErrorBounding(switchHeadFrameController)
);

export { apiRouter };
