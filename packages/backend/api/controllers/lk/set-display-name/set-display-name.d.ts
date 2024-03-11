import { ISuccessResponse } from '../../../../domain/types';

export interface ISetDisplayNameDto {
    displayName: string;
}

export interface ISetDisplayNameDtoResponse extends ISuccessResponse {}
