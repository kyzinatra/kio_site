import { TController } from '../../../domain/types/contoller.type';
import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';

export const logoutController: TController<null> = async (req, resp) => {
    resp.clearCookie('refreshToken');

    const response: ISuccessResponse = { status: 'ok' };

    resp.status(200).json(response);
};
