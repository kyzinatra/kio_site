import { TController } from '../../../../domain/types';
import { ICreateTaskResponse } from './create-task';
import { ITaskDB } from '../../../../bd';
import { Task } from '../../../../bd/schemas/task.schema';

export const createTaskController: TController<ITaskDB> = async (req, resp) => {
    const { name, isAvailable, preview, settings, description } = req.body;

    await new Task({
        name,
        description,
        isAvailable: isAvailable ?? false,
        preview: preview ?? '',
        settings: settings ?? {},
        creatorId: req.user?._id
    }).save();

    const response: ICreateTaskResponse = { status: 'ok' };

    resp.status(200).json(response);
};
