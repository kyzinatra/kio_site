import { TController } from '../../../../domain/types';
import { Task } from '../../../../bd/schemas/task.schema';
import { IGetTasksListResponse } from './get-tasks-list';

export const getTasksListController: TController<null> = async (req, resp) => {
    const tasks = await Task.find();

    const response: IGetTasksListResponse = tasks
        .map(
            task =>
                task.isApproved && {
                    id: task.id,
                    name: task.name,
                    preview: task.preview,
                    isAvailable: task.isAvailable
                }
        )
        .filter(Boolean) as IGetTasksListResponse;

    resp.status(200).json(response);
};
