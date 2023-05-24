import { CustomRequest } from './custom-request';
import { TError } from '../errors/error.type';

export type TValidator<T> = (req: CustomRequest<T>) => Promise<TError<string> | void>;
