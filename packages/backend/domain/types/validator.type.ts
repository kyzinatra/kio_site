import { CustomRequest } from './custom-request.type';
import { TError } from '../errors/error.type';
import { EErrorNames } from '../errors/client-errors';

<<<<<<< HEAD
export type TValidator<T> = (req: CustomRequest<T>) => Promise<TError<EErrorNames> | void>;
=======
export type TValidator<T> = (req: CustomRequest<T>) => Promise<TError<any> | void>;
>>>>>>> 8c3752ee0872598c6800f9799b2fd3e86227c1e0
