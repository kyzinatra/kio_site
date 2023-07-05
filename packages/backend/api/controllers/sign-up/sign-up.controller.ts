import { User } from '../../../bd';
import { ISingUpDto, ISingUpResponse } from './sign-up.types';
import bcrypt from 'bcryptjs';
import { SERVER_ERRORS } from '../../../domain/errors/server-errors';
import { TController } from '../../../domain/types/contoller.type';
import { tokenService } from '../../../domain/token';
import { TOKEN_COLLECTION } from '../../../domain/token/token-collection';

export const singUpController: TController<ISingUpDto> = async (req, resp) => {
    const { password, email, name, surname, patronymic, role } = req.body;

    const ip = req.ip;
    const browser = req.headers['user-agent'] ?? '';

    try {
        const user = await new User({
            email,
            name,
            surname,
            patronymic,
            passHash: bcrypt.hashSync(password, 7),
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

        const refreshToken = tokenService.createRefresh({ _id: user?._id.toString() as string, ip, browser });

        resp.cookie(TOKEN_COLLECTION.REFRESH_TOKEN, refreshToken, {
            httpOnly: true,
            signed: true,
            sameSite: true
        });
    } catch {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    const response: ISingUpResponse = { status: 'ok' };

    resp.status(200).json(response);
};
