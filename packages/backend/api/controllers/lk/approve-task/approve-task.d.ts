import { ISuccessResponse } from '../../../../domain/types';

export interface IApproveTaskDTO {
    taskId: string;
}
export interface IApproveTaskResponse extends ISuccessResponse {}
