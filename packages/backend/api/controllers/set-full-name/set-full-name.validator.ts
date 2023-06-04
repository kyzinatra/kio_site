import { TValidator } from '../../../domain/types/validator.type';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { isOnlyRussian, isOnlyOneWord } from '../../../domain/testers';
import { ISetFullNameDto } from './set-full-name';

export const setFullNameValidator: TValidator<ISetFullNameDto> = async req => {
    const { name, surname, patronymic } = req.body;

    if (!isOnlyRussian(name) || !isOnlyOneWord(name)) {
        return CLIENT_ERRORS.BAD_NAME;
    }

    if (!isOnlyRussian(surname) || !isOnlyOneWord(surname)) {
        return CLIENT_ERRORS.BAD_NAME;
    }

    if (!isOnlyRussian(patronymic) || !isOnlyOneWord(patronymic)) {
        return CLIENT_ERRORS.BAD_NAME;
    }
};
