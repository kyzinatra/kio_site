import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISignUpDto {
    password: string;
    email: string;
    patronymic: string;
    name: string;
    surname: string;
}

export interface ISignUpResponse extends ISuccessResponse {}
