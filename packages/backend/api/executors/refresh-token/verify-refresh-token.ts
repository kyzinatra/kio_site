import { secret } from '../../../secret';
import jwt from 'jsonwebtoken';
import { IRefreshPayload } from './refresh-token.types';
import { CLIENT_ERRORS, ICLIENT_ERROR } from '../../../domain/errors/client-errors';

interface IVerifyRefreshData extends Omit<IRefreshPayload, '_id'> {
    token: string;
}

type IVerifyRefreshToken = (data: IVerifyRefreshData) =>
    | {
          error: ICLIENT_ERROR;
          decodedToken: undefined;
      }
    | { error: undefined; decodedToken: IRefreshPayload };

export const verifyRefreshToken: IVerifyRefreshToken = ({ token, ip, browser }) => {
    let decodedToken: IRefreshPayload;
    let error: ICLIENT_ERROR;

    try {
        decodedToken = jwt.verify(token, secret) as IRefreshPayload;
    } catch (e) {
        if ((e as Error).name === 'TokenExpiredError') {
            error = CLIENT_ERRORS.TOKEN_EXPIRED;
        } else {
            error = CLIENT_ERRORS.BAD_TOKEN;
        }

        return {
            error,
            decodedToken: undefined
        };
    }

    if (decodedToken.browser !== browser || decodedToken.ip !== ip) {
        error = CLIENT_ERRORS.BAD_TOKEN;

        return {
            error,
            decodedToken: undefined
        };
    }

    return {
        error: undefined,
        decodedToken
    };
};
