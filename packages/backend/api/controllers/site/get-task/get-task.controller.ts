import { TController } from '../../../../domain/types';
import { Task } from '../../../../bd/schemas/task.schema';
import { IGetTaskDto, IGetTaskResponse } from './get-task';

export const getTaskController: TController<IGetTaskDto> = async (req, resp) => {
    const task = await Task.findOne({ _id: req.body.taskId });

    const response: IGetTaskResponse = {
        id: task!._id,
        name: task!.name,
        description: task!.description,
        isApproved: task!.isApproved,
        isAvailable: task!.isAvailable,
        preview: task!.preview
    };

    resp.status(200).json(response);
};
