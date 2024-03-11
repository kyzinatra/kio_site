import { ISignUpDto } from './sign-up';

import { CLIENT_ERRORS } from '../../../../domain/errors/client-errors';
import { ERoles, User } from '../../../../bd';
import { TValidator } from '../../../../domain/types/validator.type';
import { isOnlyRussian } from '../../../../domain/testers';
import { keycloakApi } from '../../../../keycloak/api/keycloakApi';

export const signUpValidator: TValidator<ISignUpDto> = async req => {
    const { email, name, surname, patronymic, role, password } = req.body;

    if (!isOnlyRussian(name) || !isOnlyRussian(surname)) {
        return CLIENT_ERRORS.BAD_NAME;
    }

    if (patronymic && !isOnlyRussian(patronymic)) {
        return CLIENT_ERRORS.BAD_NAME;
    }

    if (role !== ERoles.User && role !== ERoles.Creator) {
        return CLIENT_ERRORS.BAD_DTO;
    }

    const user = await User.findOne({ email });

    const keycloakUser = await keycloakApi['get-user']({ email });

    if (user || keycloakUser) {
        return CLIENT_ERRORS.EMAIL_IS_ALREADY_USED;
    }

    if (password.length < 6) {
        return CLIENT_ERRORS.BAD_PASSWORD;
    }
};
