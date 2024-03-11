import { User } from '../../../../bd';
import { ISignUpDto, ISignUpResponse } from './sign-up';
import { SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { keycloakApi } from '../../../../keycloak/api';
import { setAuthTokens } from '../../../../domain/token/token-service';

export const signUpController: TController<ISignUpDto> = async (req, resp) => {
    const { password, email, name, surname, patronymic, role } = req.body;

    await keycloakApi['create-user']({
        username: email,
        password,
        email,
        firstName: name,
        lastName: surname
    });

    let userToken = await keycloakApi['get-user-access-token']({ username: email, password: password });

    if (userToken.error) {
        return resp.status(SERVER_ERRORS.AUTH_ERROR.code).json(SERVER_ERRORS.AUTH_ERROR);
    }

    let keycloakUser = await keycloakApi['get-user']({
        email
    });

    try {
        await new User({
            _id: keycloakUser.id,
            email,
            name,
            surname,
            patronymic,
            displayName: name,
            avatarUrl: '',
            phoneNumber: '',
            studyPlace: '',
            paymentStatus: false,
            connections: [],
            claims: {
                role
            },
            info: {
                createDate: Date.now(),
                lastLoginDate: Date.now()
            },

            tasksId: []
        }).save();
    } catch (e) {
        await keycloakApi['delete-user']({ user_id: keycloakUser.id });

        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    setAuthTokens({ refresh_token: userToken.refresh_token, access_token: userToken.access_token, resp });

    const response: ISignUpResponse = { status: 'ok' };

    resp.status(200).json(response);
};
