import { TError } from './error.type';

export type EErrorNames =
    | 'UNAUTHORIZED'
    | 'TOKEN_EXPIRED'
    | 'BAD_TOKEN'
    | 'BAD_DTO'
    | 'BAD_NAME'
    | 'EMAIL_IS_ALREADY_USED'
    | 'BAD_LOGIN_OR_PASSWORD'
    | 'LACK_OF_RIGHTS'
    | 'USER_DOESNT_EXISTS'
    | 'BAD_PASSWORD'
    | 'SOLUTION_DOESNT_EXIST'
    | 'TRY_DOESNT_EXIST'
    | 'FRAME_DOESNT_EXIST'
    | 'SOLUTION_ALREADY_EXIST';

export type ICLIENT_ERROR = TError<EErrorNames>;

export const CLIENT_ERRORS: Record<EErrorNames, ICLIENT_ERROR> = {
    UNAUTHORIZED: {
        title: 'Ошибка авторизации',
        message: 'Кажется, вы не вошли в систему',
        code: 400,
        name: 'UNAUTHORIZED'
    },
    TOKEN_EXPIRED: {
        title: 'Токен истек',
        message: 'Время жизни токена авторизации истекло',
        code: 400,
        name: 'TOKEN_EXPIRED'
    },
    BAD_TOKEN: {
        title: 'Неверный токен',
        message: 'Токен не прошел проверку на валидность',
        code: 400,
        name: 'BAD_TOKEN'
    },
    BAD_DTO: {
        title: 'Некорректный DTO',
        message: 'Сервер не принял DTO',
        code: 400,
        name: 'BAD_DTO'
    },
    BAD_NAME: {
        title: 'Некорректное имя',
        message: 'Имя содержит недопустимые символы',
        code: 400,
        name: 'BAD_NAME'
    },
    EMAIL_IS_ALREADY_USED: {
        title: 'Email уже занят',
        message: 'Попробуйте ввести другой Email или войти в существующую учетную запись',
        code: 400,
        name: 'EMAIL_IS_ALREADY_USED'
    },
    BAD_LOGIN_OR_PASSWORD: {
        title: 'Ошибка авторизации',
        message: 'Неверный логин или пароль',
        code: 400,
        name: 'BAD_LOGIN_OR_PASSWORD'
    },
    LACK_OF_RIGHTS: {
        title: 'Недостаточно прав',
        message: 'У вас недостаточно прав, чтобы совершить действие',
        code: 400,
        name: 'LACK_OF_RIGHTS'
    },
    USER_DOESNT_EXISTS: {
        title: 'Пользователь не существует',
        message: 'Обращение к пользователю, которого не существует',
        code: 400,
        name: 'USER_DOESNT_EXISTS'
    },
    BAD_PASSWORD: {
        title: 'Некорректный пароль',
        message: 'Пароль не подходит по длинне или содержит недопустимые символы',
        code: 400,
        name: 'BAD_PASSWORD'
    },
    SOLUTION_DOESNT_EXIST: {
        title: 'Нет решения задачи',
        message: 'У пользователя нет решения для запрашиваемой задачи',
        code: 400,
        name: 'SOLUTION_DOESNT_EXIST'
    },
    SOLUTION_ALREADY_EXIST: {
        title: 'Решение задачи уже существует',
        message: 'У пользователя уже есть решения для запрашиваемой задачи, повторное создание невозможно',
        code: 400,
        name: 'SOLUTION_ALREADY_EXIST'
    },
    FRAME_DOESNT_EXIST: {
        title: 'Кадр не найден',
        message: 'Указанный frame не был найден в базе',
        code: 400,
        name: 'FRAME_DOESNT_EXIST'
    },

    TRY_DOESNT_EXIST: {
        title: 'Попытка не найдена',
        message: 'Указанный Try не был найден в базе',
        code: 400,
        name: 'TRY_DOESNT_EXIST'
    }
};
