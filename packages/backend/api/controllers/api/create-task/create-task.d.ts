import { ITaskDB } from '../../../../bd';
import { ISuccessResponse } from '../../../../domain/types';

export interface ICreateTaskDTO extends Omit<ITaskDB, '_id'> {}
export interface ICreateTaskResponse extends ISuccessResponse {}
