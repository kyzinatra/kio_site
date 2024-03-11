import { TController } from '../../../../domain/types';
import { ICreateTaskDTO, ICreateTaskResponse } from './create-task';
import { Task } from '../../../../bd/schemas/task.schema';
import { saveFile } from '../../../../domain/utils/save-file';

export const createTaskController: TController<ICreateTaskDTO> = async (req, resp) => {
    const { name, settings, description } = req.body;
    const preview = req.files?.preview;

    const task = new Task({
        name,
        description,
        isAvailable: false,
        settings: settings ?? {},
        creatorId: req.user?._id
    });

    if (preview) {
        task.preview = await saveFile({ file: preview, objectId: task._id });
    }

    await task.save();

    const response: ICreateTaskResponse = { status: 'ok' };

    resp.status(200).json(response);
};
