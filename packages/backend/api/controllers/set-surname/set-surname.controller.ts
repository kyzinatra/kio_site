import { TController } from '../../../domain/types/contoller.type';
import { User } from '../../../bd';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { ISetSurnameResponse, ISetSurnameDto } from './set-surname';

export const setSurnameController: TController<ISetSurnameDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXITS.code).json(CLIENT_ERRORS.USER_DOESNT_EXITS);
        return;
    }

    user.surname = req.body.surname;
    await user.save();

    const response: ISetSurnameResponse = { status: 'ok' };

    resp.status(200).json(response);
};
