import { CustomRequest } from './custom-request.type';
import { TError } from '../errors/error.type';

export type TValidator<T> = (req: CustomRequest<T>) => Promise<TError | void>;
