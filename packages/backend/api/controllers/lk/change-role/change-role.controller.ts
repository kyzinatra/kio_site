import { IChangeRoleDto, IChangeRoleResponse } from './change-role';
import { User } from '../../../../bd';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';

export const changeRoleController: TController<IChangeRoleDto> = async (req, resp) => {
    const { userId, role } = req.body;

    const user = await User.findOne({ _id: userId });

    if (!user) {
        return resp.status(CLIENT_ERRORS.USER_DOESNT_EXISTS.code).json(CLIENT_ERRORS.USER_DOESNT_EXISTS);
    }

    user.claims.role = role;
    await user.save();

    const response: IChangeRoleResponse = { status: 'ok' };

    resp.status(200).json(response);
};
