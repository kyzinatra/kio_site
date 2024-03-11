import { ISuccessResponse } from '../../../../domain/types';

export interface IStartSolutionDto {
    taskId: string;
}

export interface IStartSolutionResponse extends ISuccessResponse {}
