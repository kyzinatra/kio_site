import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISetFullNameDto {
    name: string;
    surname: string;
    patronymic?: string;
}

export interface ISetFullNameResponse extends ISuccessResponse {}
