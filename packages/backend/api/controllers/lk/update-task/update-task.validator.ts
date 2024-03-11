import { ERoles } from '../../../../bd';
import { TValidator } from '../../../../domain/types';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { Task } from '../../../../bd/schemas/task.schema';
import { IUpdateTaskDTO } from './update-task';

export const updateTaskValidator: TValidator<IUpdateTaskDTO> = async req => {
    const role = req.user?.claims.role;
    const { id } = req.body;

    if (role !== ERoles.Admin && role !== ERoles.Creator) {
        return CLIENT_ERRORS.LACK_OF_RIGHTS;
    }

    const task = await Task.exists({ _id: id });

    if (!task) {
        return CLIENT_ERRORS.TASK_DOESNT_EXIST;
    }
};
