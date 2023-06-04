import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISetPatronymicDto {
    patronymic: string;
}

export interface ISetPatronymicResponse extends ISuccessResponse {}
