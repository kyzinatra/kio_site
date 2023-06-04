import { TController } from '../../../domain/types/contoller.type';
import { IMeResponse } from './me.types';
import { IUserBD } from '../../../bd/types/user-bd.interface';

export const meController: TController<null> = async (req, resp) => {
    const {
        displayName,
        name,
        surname,
        patronymic,
        claims: { role },
        avatarUrl,
        email
    } = req.user as IUserBD;

    const response: IMeResponse = { displayName, name, surname, patronymic, role, avatarUrl, email };

    resp.status(200).json(response);
};
