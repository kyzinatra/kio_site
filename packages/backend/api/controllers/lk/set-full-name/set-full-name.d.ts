import { ISuccessResponse } from '../../../../domain/types';

export interface ISetFullNameDto {
    name: string;
    surname: string;
    patronymic?: string;
}

export interface ISetFullNameResponse extends ISuccessResponse {}
