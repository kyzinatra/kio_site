import { ISuccessResponse } from '../../../../domain/types';

export interface ISignInDto {
    password: string;
    email: string;
}

export interface ISignInResponse extends ISuccessResponse {}
