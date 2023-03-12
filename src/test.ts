export type TArray = { [key: string]: string | TArray | Array<string | number | TArray> };

export interface IUserResult {
  result: TArray;
  cache: TArray;
}

export interface IResult {
  caches: IUserResult["result"][];
  bestResult: IUserResult["result"];
  statistics: {
    timeStart: Date;
    timeLastChange: Date;
  };
}

export type TTask = IResult[];
