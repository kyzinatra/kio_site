import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISignInDto {
    password: string;
    email: string;
}

export interface ISignInResponse extends ISuccessResponse {}
