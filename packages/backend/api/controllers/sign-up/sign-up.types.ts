import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISingUpDto {
    password: string;
    email: string;
    patronymic: string;
    name: string;
    surname: string;
}

export interface ISingUpResponse extends ISuccessResponse {}
