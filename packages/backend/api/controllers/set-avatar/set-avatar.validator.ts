import { TValidator } from '../../../domain/types/validator.type';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { ISetAvatarDto } from './set-avatar';
import { UploadedFile } from 'express-fileupload';
import path from 'path';

export const signAvatarValidator: TValidator<ISetAvatarDto> = async req => {
    const file = req.files?.file as UploadedFile;

    if (!file) {
        return CLIENT_ERRORS.BAD_DTO;
    }

    const allowedFileExtension = ['.png', '.jpg', '.jpeg'];

    if (!allowedFileExtension.includes(path.extname(file.name))) {
        return CLIENT_ERRORS.BAD_DTO;
    }
};
