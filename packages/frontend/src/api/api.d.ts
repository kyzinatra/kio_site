import { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import type {
  IMeResponse,
  ISignInResponse,
  ISignInDto,
  ISignUpDto,
  ISignUpResponse
} from '../../../backend/api/index';
import { IUserBD } from '../../../backend/bd/types/user-bd.interface';
import { ICLIENT_ERROR, EErrorNames } from '../../../backend/domain/errors/client-errors';

export type { IUserBD, IMeResponse, ISignInResponse, ISignInDto, ISignUpDto, ISignUpResponse, EErrorNames};
export type TIsLogin =
  | {
      isLogin: false;
    }
  | ({ isLogin: true } & IMeResponse);

export type TError = ICLIENT_ERROR;


export type TUseAppMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
  withSuccess?: string | false
) => UseMutationResult<TData, TError, TVariables, TContext>;
