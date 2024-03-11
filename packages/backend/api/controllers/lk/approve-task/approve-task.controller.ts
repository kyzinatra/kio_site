import { IApproveTaskDTO, IApproveTaskResponse } from './approve-task';
import { TController } from '../../../../domain/types';
import { Task } from '../../../../bd/schemas/task.schema';

export const approveTaskController: TController<IApproveTaskDTO> = async (req, resp) => {
    const { taskId } = req.body;

    const task = await Task.findOne({
        _id: taskId
    });

    task!.isApproved = true;
    await task!.save();

    const response: IApproveTaskResponse = { status: 'ok' };

    resp.status(200).json(response);
};
