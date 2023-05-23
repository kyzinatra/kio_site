import { CustomRequest } from './custom-request.type';
import { Response } from 'express';

export type TController<T> = (req: CustomRequest<T>, resp: Response) => void;
