import { TController } from '../../../../domain/types';
import { ISignInResponse, ISignInDto } from './sign-in';
import { TOKEN_COLLECTION } from '../../../../domain/token/token-collection';
import { keycloakApi } from '../../../../keycloak/api';
import { CLIENT_ERRORS } from '../../../../domain/errors';

export const signInController: TController<ISignInDto> = async (req, resp) => {
    const { email, password } = req.body;

    const authResult = await keycloakApi['get-user-access-token']({ username: email, password: password });

    if (authResult.error) {
        return resp
            .status(CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD.code)
            .json(CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD);
    }

    resp.cookie(TOKEN_COLLECTION.ACCESS_TOKEN, authResult.access_token, {
        httpOnly: true,
        signed: true,
        sameSite: true
    });

    resp.cookie(TOKEN_COLLECTION.REFRESH_TOKEN, authResult.refresh_token, {
        httpOnly: true,
        signed: true,
        sameSite: true
    });

    const response: ISignInResponse = { status: 'ok' };

    resp.status(200).json(response);
};
