import { User } from '../../../bd/schemas/user.schema';
import { ISingUpDto, ISingUpResponse } from './sign-up';
import bcrypt from 'bcryptjs';
import { ERoles } from '../../../bd/types/role';
import { SERVER_ERRORS } from '../../../domain/errors/server-errors';
import { TController } from '../../../domain/types/contoller';

export const singUpController: TController<ISingUpDto> = async (req, resp) => {
    const { password, email, name, surname, patronymic } = req.body;
    try {
        await new User({
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
                role: ERoles.User
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

    const response: ISingUpResponse = { status: 'ok' };

    resp.status(200).json(response);
};
