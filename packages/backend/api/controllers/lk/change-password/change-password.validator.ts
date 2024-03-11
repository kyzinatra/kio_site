import { IChangePasswordDto } from './change-password';
import { TValidator } from '../../../../domain/types';
import { CLIENT_ERRORS } from '../../../../domain/errors';

export const changePasswordValidator: TValidator<IChangePasswordDto> = async req => {
    const { newPassword, oldPassword } = req.body;

    if (newPassword.length < 6 || newPassword === oldPassword) {
        return CLIENT_ERRORS.BAD_PASSWORD;
    }
};
