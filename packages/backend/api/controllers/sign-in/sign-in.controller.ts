import { TController } from '../../../domain/types/contoller';
import { ISignInResponse, ISingInDto } from './sign-in';
import { User } from '../../../bd/schemas/user.schema';
import { createRefreshToken } from '../../executors/refresh-token/create-refresh-token';

export const signInController: TController<ISingInDto> = async (req, resp) => {
    const { email } = req.body;

    const ip = req.ip;
    const browser = req.headers['user-agent'] ?? '';
    console.log(ip, browser);

    const user = await User.findOne({ email });

    const refreshToken = createRefreshToken({ _id: user?._id.toString() as string, ip, browser });

    resp.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: true });

    const response: ISignInResponse = { status: 'ok' };

    resp.status(200).json(response);
};
