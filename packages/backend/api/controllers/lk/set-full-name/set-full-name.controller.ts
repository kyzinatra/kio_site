import { TController } from '../../../../domain/types';
import { User } from '../../../../bd';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { ISetFullNameDto, ISetFullNameResponse } from './set-full-name';

export const setFullNameController: TController<ISetFullNameDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXISTS.code).json(CLIENT_ERRORS.USER_DOESNT_EXISTS);
        return;
    }

    user.name = req.body.name;
    user.surname = req.body.surname;
    user.patronymic = req.body.patronymic ?? '';

    await user.save();

    const response: ISetFullNameResponse = { status: 'ok' };

    resp.status(200).json(response);
};
