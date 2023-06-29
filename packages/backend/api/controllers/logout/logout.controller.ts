import { TController } from '../../../domain/types/contoller.type';
import { ILogoutResponse } from './logout';
import { tokenService } from '../../../domain/token';
import { TOKEN_COLLECTION } from '../../../domain/token/token-collection';

export const logoutController: TController<null> = async (req, resp) => {
    resp.clearCookie(TOKEN_COLLECTION.REFRESH_TOKEN);

    tokenService.ban({ token: req.signedCookies[TOKEN_COLLECTION.REFRESH_TOKEN], banReason: 'logout' });
    const response: ILogoutResponse = { status: 'ok' };

    resp.status(200).json(response);
};
