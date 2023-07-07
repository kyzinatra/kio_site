import { User } from '../../../bd/schemas/user.schema';
import { ISignUpDto, ISignUpResponse } from './sign-up.types';
import bcrypt from 'bcryptjs';
import { ERoles } from '../../../bd/types/role.type';
import { SERVER_ERRORS } from '../../../domain/errors/server-errors';
import { TController } from '../../../domain/types/contoller.type';

export const signUpController: TController<ISignUpDto> = async (req, resp) => {
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

    const response: ISignUpResponse = { status: 'ok' };

    resp.status(200).json(response);
};
