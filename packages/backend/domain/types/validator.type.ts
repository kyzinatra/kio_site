import { CustomRequest } from '#domain/types/custom-request.type';
import { TError } from '#domain/errors/error.type';
import { EErrorNames } from '#domain/errors/client-errors';

export type TValidator<T> = (req: CustomRequest<T>) => Promise<TError<EErrorNames> | void>;
