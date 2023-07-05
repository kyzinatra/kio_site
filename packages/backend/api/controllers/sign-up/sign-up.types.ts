import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';
import { ERoles } from '../../../bd';

export interface ISingUpDto {
    password: string;
    email: string;
    patronymic: string;
    name: string;
    surname: string;
    role: ERoles.Creator | ERoles.User;
}

export interface ISingUpResponse extends ISuccessResponse {}
