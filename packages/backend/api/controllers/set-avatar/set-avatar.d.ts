import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export interface ISetAvatarDto {
    file: File;
}

export interface ISetAvatarResponse extends ISuccessResponse {}
