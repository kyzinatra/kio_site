import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface IChangePasswordDto {
    oldPassword: string;
    newPassword: string;
}

export interface IChangePasswordResponse extends ISuccessResponse {}
