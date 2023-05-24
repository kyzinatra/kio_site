import { CustomRequest } from './custom-request';
import { Response } from 'express';

export type TController<T> = (req: CustomRequest<T>, resp: Response) => void;
