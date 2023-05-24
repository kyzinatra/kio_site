import { ISuccessResponse } from '../../../domain/types/success-answer';

export interface ISingInDto {
    password: string;
    email: string;
}

export interface ISignInResponse extends ISuccessResponse {}
