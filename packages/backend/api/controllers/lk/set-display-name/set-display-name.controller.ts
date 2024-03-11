import { TController } from '../../../../domain/types';
import { User } from '../../../../bd';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { ISetDisplayNameDto, ISetDisplayNameDtoResponse } from './set-display-name';

export const setDisplayNameController: TController<ISetDisplayNameDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXISTS.code).json(CLIENT_ERRORS.USER_DOESNT_EXISTS);
        return;
    }

    user.displayName = req.body.displayName;
    await user.save();

    const response: ISetDisplayNameDtoResponse = { status: 'ok' };

    resp.status(200).json(response);
};
