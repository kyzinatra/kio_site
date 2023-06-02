import { CustomRequest } from './custom-request.type';
import { TError } from '../errors/error.type';
import { EErrorNames } from '../errors/client-errors';

export type TValidator<T> = (req: CustomRequest<T>) => Promise<TError<EErrorNames> | void>;
