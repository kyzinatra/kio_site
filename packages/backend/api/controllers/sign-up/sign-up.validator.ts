import { ISingUpDto } from './sign-up.types';
import { isOnlyRussian } from '../../../domain/testers';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { ERoles, User } from '../../../bd';
import { TValidator } from '../../../domain/types/validator.type';

export const signUpValidator: TValidator<ISingUpDto> = async req => {
    const { email, name, surname, patronymic, role } = req.body;

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

    if (role !== ERoles.User && role !== ERoles.Creator) {
        return CLIENT_ERRORS.BAD_DTO;
    }
};
