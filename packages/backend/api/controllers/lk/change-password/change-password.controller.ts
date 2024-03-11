import { IChangePasswordDto, IChangePasswordResponse } from './change-password';
import { TController } from '../../../../domain/types';
import { keycloakApi } from '../../../../keycloak/api';
import { TOKEN_COLLECTION } from '../../../../domain/token/token-collection';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { setAuthTokens } from '../../../../domain/token/token-service';

export const changePasswordController: TController<IChangePasswordDto> = async (req, resp) => {
    const { newPassword, oldPassword } = req.body;

    const [token, introspectedCurrentToken] = await Promise.all([
        keycloakApi['get-user-access-token']({
            username: req.user?.email ?? '',
            password: oldPassword
        }),
        keycloakApi['introspect-user-access-token']({
            token: req.signedCookies[TOKEN_COLLECTION.ACCESS_TOKEN]
        })
    ]);

    if (token.error || !introspectedCurrentToken.active) {
        return resp
            .status(CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD.code)
            .json(CLIENT_ERRORS.BAD_LOGIN_OR_PASSWORD);
    }

    const [_, changePasswordResult] = await Promise.all([
        keycloakApi['user-all-logout']({ user_id: introspectedCurrentToken.sub }),
        keycloakApi['reset-user-password']({
            password: newPassword,
            user_id: introspectedCurrentToken.sub
        })
    ]);

    if (changePasswordResult.status >= 400) {
        return resp.status(SERVER_ERRORS.SOMETHING_WENT_WRONG.code).json(SERVER_ERRORS.SOMETHING_WENT_WRONG);
    }

    const newToken = await keycloakApi['get-user-access-token']({
        username: req.user?.email ?? '',
        password: newPassword
    });

    setAuthTokens({ access_token: newToken.access_token, refresh_token: newToken.refresh_token, resp });

    const response: IChangePasswordResponse = { status: 'ok' };

    resp.status(200).json(response);
};
