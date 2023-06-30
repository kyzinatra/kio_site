import type {IUserBD} from "../../../../backend/bd/types"
import type {IMeResponse,  ISignInResponse, ISignInDto, ISignUpDto, ISignUpResponse} from "../../../backend/api/index"

export type {IUserBD, IMeResponse,  ISignInResponse, ISignInDto, ISignUpDto,  ISignUpResponse}

export type TIsLogin  = {
isLogin: false,
} | ({ isLogin: true} & IMeResponse)


export type TError = {
  title: string,
  message: string,
  code: number,
  name: string
}
export type TUseAppMutation = < 
  TData = unknown, 
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
  withSuccess?: string | false 
)=> UseMutationResult<TData, TError, TVariables, TContext>;

