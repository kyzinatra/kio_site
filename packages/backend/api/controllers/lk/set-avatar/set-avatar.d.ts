import { ISuccessResponse } from '../../../../domain/types';

export interface ISetAvatarDto {
    file: File;
}

export interface ISetAvatarResponse extends ISuccessResponse {}
