import { ISuccessResponse } from '../../../../domain/types/success-anwer.interface';
import { ERoles } from '../../../../bd';

export interface ISignUpDto {
    password: string;
    email: string;
    patronymic: string;
    name: string;
    surname: string;
    role: ERoles.User | ERoles.Creator;
}

export interface ISignUpResponse extends ISuccessResponse {}
