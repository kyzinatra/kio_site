import { ISingInDto } from './sign-in.types';
import { TValidator } from '../../../domain/types/validator.type';
import { User } from '../../../bd/schemas/user.schema';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { compareSync } from 'bcryptjs';

export const signInValidator: TValidator<ISingInDto> = async req => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD;
    }

    if (!compareSync(password, user.passHash)) {
        return CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD;
    }
};
