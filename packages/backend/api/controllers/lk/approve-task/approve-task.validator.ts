import { ERoles } from '../../../../bd';
import { TValidator } from '../../../../domain/types';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { IApproveTaskDTO } from './approve-task';
import { Task } from '../../../../bd/schemas/task.schema';

export const approveTaskValidator: TValidator<IApproveTaskDTO> = async req => {
    const role = req.user?.claims.role;

    if (role !== ERoles.Admin) {
        return CLIENT_ERRORS.LACK_OF_RIGHTS;
    }

    const task = await Task.exists({ _id: req.body.taskId });

    if (!task) {
        return CLIENT_ERRORS.TASK_DOESNT_EXIST;
    }
};
