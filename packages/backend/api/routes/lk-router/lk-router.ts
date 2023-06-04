import { Router } from 'express';
import { QUERY_KEYS } from '../../query-keys';
import { setNameController } from '../../controllers';
import { validationMiddleware } from '../../../domain/middleware';
import { check } from 'express-validator';
import { setNameValidator } from '../../controllers/set-name/set-name.validator';
import { setSurnameController } from '../../controllers/set-surname';
import { setSurnameValidator } from '../../controllers/set-surname/set-surname.validator';
import { setPatronymicValidator } from '../../controllers/set-patronymic/set-patronymic.validator';
import { setPatronymicController } from '../../controllers/set-patronymic';
import { setDisplayNameController } from '../../controllers/set-display-name';

const lkRouter = Router();

lkRouter.post(
    QUERY_KEYS.SET_NAME,
    validationMiddleware([check('name').isString()], setNameValidator),
    setNameController
);

lkRouter.post(
    QUERY_KEYS.SET_SURNAME,
    validationMiddleware([check('surname').isString()], setSurnameValidator),
    setSurnameController
);

lkRouter.post(
    QUERY_KEYS.SET_PATRONYMIC,
    validationMiddleware([check('patronymic').isString()], setPatronymicValidator),
    setPatronymicController
);

lkRouter.post(
    QUERY_KEYS.SET_DISPLAY_NAME,
    validationMiddleware([check('displayName').isString()]),
    setDisplayNameController
);

export { lkRouter };
