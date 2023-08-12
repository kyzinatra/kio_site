import { ISuccessResponse } from '#domain/types';

export interface IChangePasswordDto {
    oldPassword: string;
    newPassword: string;
}

export interface IChangePasswordResponse extends ISuccessResponse {}
