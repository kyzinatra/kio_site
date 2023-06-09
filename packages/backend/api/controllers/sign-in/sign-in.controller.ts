import { TController } from '../../../domain/types/contoller.type';

import { ISignInResponse, ISignInDto } from './sign-in.types';
import { User } from '../../../bd';
import { TOKEN_COLLECTION } from '../../../domain/token/token-collection';
import { tokenService } from '../../../domain/token';

export const signInController: TController<ISignInDto> = async (req, resp) => {
    const { email } = req.body;

    const ip = req.ip;
    const browser = req.headers['user-agent'] ?? '';

    const user = await User.findOne({ email });

    const refreshToken = tokenService.createRefresh({ _id: user?._id.toString() as string, ip, browser });

    resp.cookie(TOKEN_COLLECTION.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        signed: true,
        sameSite: true
    });

    const response: ISignInResponse = { status: 'ok' };

    resp.status(200).json(response);
};
