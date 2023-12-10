import { ERoles } from '../../../../bd';
import { TValidator } from '../../../../domain/types';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { ICreateTaskDTO } from './create-task';
import { Task } from '../../../../bd/schemas/task.schema';

export const createTaskValidator: TValidator<ICreateTaskDTO> = async req => {
    const role = req.user?.claims.role;

    if (role !== ERoles.Admin && role !== ERoles.Creator) {
        return CLIENT_ERRORS.LACK_OF_RIGHTS;
    }

    const task = await Task.exists({ name: req.body.name });

    if (task) {
        return CLIENT_ERRORS.NAME_IS_ALREADY_USED;
    }
};
