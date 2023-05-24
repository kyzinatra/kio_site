import { ISingUpDto } from './sign-up';
import { isOnlyRussian } from '../../../domain/testers/only-russion-string';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { User } from '../../../bd/schemas/user.schema';
import { TValidator } from '../../../domain/types/validator';

export const signUpValidator: TValidator<ISingUpDto> = async req => {
    const { email, name, surname, patronymic } = req.body;

    if (!isOnlyRussian(name) || !isOnlyRussian(surname)) {
        return CLIENT_ERRORS.BAD_NAME;
    }

    if (patronymic && !isOnlyRussian(patronymic)) {
        return CLIENT_ERRORS.BAD_NAME;
    }

    const user = await User.findOne({ email });

    if (user) {
        return CLIENT_ERRORS.EMAIL_IS_ALREADY_USED;
    }
};
