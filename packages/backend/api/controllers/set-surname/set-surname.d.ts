import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISetSurnameDto {
    surname: string;
}

export interface ISetSurnameResponse extends ISuccessResponse {}
