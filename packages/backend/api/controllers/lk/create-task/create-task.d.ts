import { ISuccessResponse } from '../../../../domain/types';

export interface ICreateTaskDTO {
    name: string;
    description: string;
    settings: object;
}

export interface ICreateTaskResponse extends ISuccessResponse {}
