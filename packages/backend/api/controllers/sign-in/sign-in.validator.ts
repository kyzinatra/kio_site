import { ISignInDto } from './sign-in.types';
import { TValidator } from '../../../domain/types/validator.type';
import { User } from '../../../bd';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';

export const signInValidator: TValidator<ISignInDto> = async req => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD;
    }
};
