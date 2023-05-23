import { secret } from '../../../secret';
import jwt from 'jsonwebtoken';
import { IRefreshPayload } from './refresh-token.types';

interface ICheckRefreshData extends Omit<IRefreshPayload, '_id'> {
    token: string;
}

type ICheckRefreshToken = (data: ICheckRefreshData) => boolean;

export const checkRefreshToken: ICheckRefreshToken = ({ token, ip, browser }) => {
    let decodedToken: IRefreshPayload;

    try {
        decodedToken = jwt.verify(token, secret) as IRefreshPayload;
    } catch (e) {
        return false;
    }

    return !(decodedToken.browser !== browser || decodedToken.ip !== ip);
};
