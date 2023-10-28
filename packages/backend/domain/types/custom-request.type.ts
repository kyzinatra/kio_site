import { Request } from 'express';
import { IUserBD } from '../../bd/types/user-bd.interface';

export interface CustomRequest<T> extends Request {
    body: T;
    user?: (IUserBD & { _id: string }) | null;
}
