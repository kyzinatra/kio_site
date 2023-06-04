import { TController } from '../../../domain/types/contoller.type';
import { User } from '../../../bd';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { ISetNameDto, ISetNameResponse } from './set-name';

export const setNameController: TController<ISetNameDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXITS.code).json(CLIENT_ERRORS.USER_DOESNT_EXITS);
        return;
    }

    user.name = req.body.name;
    await user.save();

    const response: ISetNameResponse = { status: 'ok' };

    resp.status(200).json(response);
};
