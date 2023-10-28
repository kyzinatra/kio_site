import { Response } from 'express';

export type ISetAuthTokens = ({
    access_token,
    refresh_token,
    resp
}: {
    access_token?: string;
    refresh_token?: string;
    resp: Response;
}) => Response;
