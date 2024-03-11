import { TController } from '../../../../domain/types';
import { Task } from '../../../../bd/schemas/task.schema';
import { IGetNotApprovedTasksListResponse } from './get-not-approved-tasks-list';

export const getNotApprovedTasksListController: TController<null> = async (req, resp) => {
    const tasks = await Task.find();

    const response: IGetNotApprovedTasksListResponse = tasks
        .map(
            task =>
                !task.isApproved && {
                    id: task._id,
                    name: task.name,
                    preview: task.preview,
                    isAvailable: task.isAvailable
                }
        )
        .filter(Boolean) as IGetNotApprovedTasksListResponse;

    resp.status(200).json(response);
};
