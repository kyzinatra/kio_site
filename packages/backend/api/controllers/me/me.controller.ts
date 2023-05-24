import { TController } from '../../../domain/types/contoller';
import { User } from '../../../bd/schemas/user.schema';
import { IUserBD } from '../../../bd/types/user-bd';
import { IMeResponse } from './me.types';

export const meController: TController<null> = async (req, resp) => {
    const user = (await User.findOne({ _id: req._id })) as IUserBD;
    const {
        displayName,
        name,
        surname,
        patronymic,
        claims: { role },
        avatarUrl
    } = user;

    const response: IMeResponse = { displayName, name, surname, patronymic, role, avatarUrl };

    resp.status(200).json(response);
};
