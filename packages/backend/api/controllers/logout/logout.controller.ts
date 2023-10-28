import { TController } from '../../../domain/types/contoller.type';
import { ILogoutResponse } from './logout';
import { TOKEN_COLLECTION } from '../../../domain/token/token-collection';
import { keycloakApi } from '../../../keycloak/api/keycloakApi';

export const logoutController: TController<null> = async (req, resp) => {
    resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);
    resp.clearCookie(TOKEN_COLLECTION.ACCESS_TOKEN);

    await keycloakApi['user-logout']({ refresh_token: req.signedCookies[TOKEN_COLLECTION.REFRESH_TOKEN] });

    const response: ILogoutResponse = { status: 'ok' };

    resp.status(200).json(response);
};
