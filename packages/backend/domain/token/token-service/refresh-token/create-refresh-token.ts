import { secret } from '../../../../secret';
import jwt from 'jsonwebtoken';
import { IRefreshPayload } from './refresh-token.types';

type ICreateRefreshToken = (data: IRefreshPayload) => string;

export const createRefreshToken: ICreateRefreshToken = ({ _id, ip, browser }) => {
    const payload = { _id, ip, browser };

    return jwt.sign(payload, secret, { expiresIn: '48h' });
};
