import type {IUserBD} from "../../../../backend/bd/types"
import type {IMeResponse,  ISignInResponse, ISingInDto, ISingUpDto, ISingUpResponse} from "../../../backend/api/index"

export type {IUserBD, IMeResponse,  ISignInResponse, ISingInDto, ISingUpDto,  ISingUpResponse}

export type TIsLogin  = {
isLogin: false,
} | ({ isLogin: true} & IMeResponse)


export type TError = {
  title: string,
  message: string,
  code: number,
  name: string
}