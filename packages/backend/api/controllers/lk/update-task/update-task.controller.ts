import { TController } from '../../../../domain/types';
import { Task } from '../../../../bd/schemas/task.schema';
import { IUpdateTaskResponse } from './update-task';
import { IUpdateTaskDTO } from './update-task';
import { removeFile } from '../../../../domain/utils/remove-file';
import { saveFile } from '../../../../domain/utils/save-file';

export const updateTaskController: TController<IUpdateTaskDTO> = async (req, resp) => {
    const { name, settings, description, id } = req.body;
    const preview = req.files?.preview;

    const task = await Task.findOne({ _id: id });

    task!.name = name;
    task!.settings = settings ?? {};
    task!.description = description;

    if (preview) {
        if (task!.preview) {
            removeFile({ link: task!.preview });
        }

        task!.preview = await saveFile({ file: preview, objectId: task!._id });
    }

    await task!.save();

    const response: IUpdateTaskResponse = { status: 'ok' };

    resp.status(200).json(response);
};
