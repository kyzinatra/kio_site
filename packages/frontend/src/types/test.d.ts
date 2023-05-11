export type TArray = { [key: string]: string | TArray | Array<string | number | TArray> };

/** @description Объект, который возвращается от пользователя на изменение в решении задачи */
export interface IUserResult {
  result: TArray;
  cache: TArray;
}

/** @description Создается на сессию и хранит весь список изменений и статистику */
export interface IResult {
  caches: IUserResult["result"][];
  bestResult: IUserResult["result"];
  statistics: {
    timeStart: Date;
    timeLastChange: Date;
  };
}

export type TUserResults = IResult[];

/** @description Описание задачи и ее настроек */
export interface ITask {
  title: string;
  description: string;
  isAvailable: boolean;
  id: string;
  preview: string;
  settings: {
    level: number;
    [key: string]: string | number;
  };
  tutorialLink: string;
  assetsPath: string;
  titlePath: string;
}

/** @description Описание результатов конкретной задачи у всех студентов */
export interface ITaskResult {
  students: Array<{
    studentId: string;
    resultId: string;
  }>;
  results: Array<{
    resultId: string;
    data: IResult;
  }>;
}

/** @see https://www.notion.so/3932769cf83843d3858e08da7397f1b4?v=d15fad4e4cb5425d9dd892f8b9deee5f*/
export type TRole = "Admin" | "User" | "Watcher" | "Tester" | "Creator";

/** @description Приватная инфа о юзере в токене */
export interface IUser {
  email: string;
  id: string;
  claims: {
    role: TRole;
  };
}

/** @description Пользователь в базе данных  */
export interface IUserBD {
  id: string;
  email: string;
  passHash: string;
  displayName: string;
  avatarUrl: string;
  phoneNumber: string;
  studyPlace: string;
  paymentStatus?: boolean;
  connections: ("VK"|"GOOGLE"|"GITHUB")[];
  claims: {
    role: TRole;
  };
  info: {
    createdDate: Date;
    lastLoginDate: Date;
  };
  tasksId: string[];
}

export interface IRegister {
  email: string;
  password: string;
  displayName: string;
}

export interface ILogin {
  email: string;
  password: string;
}
