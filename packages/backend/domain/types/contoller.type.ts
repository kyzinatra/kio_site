import { CustomRequest } from './custom-request.type';
import { NextFunction, Response } from 'express';

export type TController<T> = (req: CustomRequest<T>, resp: Response, next: NextFunction) => void;
