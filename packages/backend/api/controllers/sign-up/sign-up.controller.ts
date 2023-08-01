import { User } from '../../../bd';
import { ISignUpDto, ISignUpResponse } from './sign-up.types';
import { SERVER_ERRORS } from '../../../domain/errors/server-errors';
import { TController } from '../../../domain/types/contoller.type';
import { keycloakApi } from '../../../keycloak/api/keycloakApi';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { TOKEN_COLLECTION } from '../../../domain/token/token-collection';

export const signUpController: TController<ISignUpDto> = async (req, resp) => {
    const { password, email, name, surname, patronymic, role } = req.body;

    try {
        await new User({
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
    } catch {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    await keycloakApi['create-user']({
        username: email,
        password,
        email,
        firstName: name,
        lastName: surname
    });

    const authResult = await keycloakApi['get-user-access-token']({ username: email, password: password });

    if (authResult.error) {
        return resp
            .status(CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD.code)
            .json(CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD);
    }

    resp.cookie(TOKEN_COLLECTION.ACCESS_TOKEN, authResult['access_token'], {
        httpOnly: true,
        signed: true,
        sameSite: true
    });

    resp.cookie(TOKEN_COLLECTION.REFRESH_TOKEN, authResult['refresh_token'], {
        httpOnly: true,
        signed: true,
        sameSite: true
    });

    const response: ISignUpResponse = { status: 'ok' };

    resp.status(200).json(response);
};
