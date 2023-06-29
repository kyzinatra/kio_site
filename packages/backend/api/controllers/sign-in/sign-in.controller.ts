import { TController } from '../../../domain/types/contoller.type';
import { ISignInResponse, ISignInDto } from './sign-in.types';
import { User } from '../../../bd/schemas/user.schema';
import { createRefreshToken } from '../../executors/refresh-token/create-refresh-token';

export const signInController: TController<ISignInDto> = async (req, resp) => {
    const { email } = req.body;

    const ip = req.ip;
    const browser = req.headers['user-agent'] ?? '';

    const user = await User.findOne({ email });

    const refreshToken = createRefreshToken({ _id: user?._id.toString() as string, ip, browser });

    resp.cookie('refreshToken', refreshToken, { httpOnly: true });

    const response: ISignInResponse = { status: 'ok' };

    resp.status(200).json(response);
};
