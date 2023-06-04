import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISetNameDto {
    name: string;
}

export interface ISetNameResponse extends ISuccessResponse {}
