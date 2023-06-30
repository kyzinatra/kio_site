import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISetDisplayNameDto {
    displayName: string;
}

export interface ISetDisplayNameDtoResponse extends ISuccessResponse {}
