import { TController } from '../../../domain/types/contoller.type';
import { IMeResponse } from './me.types';
import { User } from '../../../bd';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';

export const meController: TController<null> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        return resp.status(CLIENT_ERRORS.USER_DOESNT_EXITS.code).json(CLIENT_ERRORS.USER_DOESNT_EXITS);
    }

    const {
        displayName,
        name,
        surname,
        patronymic,
        claims: { role },
        avatarUrl,
        email,
        _id
    } = user;

    const response: IMeResponse = {
        displayName,
        name,
        surname,
        patronymic,
        role,
        avatarUrl,
        email,
        id: _id.toString()
    };

    resp.status(200).json(response);
};
