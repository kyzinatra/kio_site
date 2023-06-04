import { TValidator } from '../../../domain/types/validator.type';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { ISetPatronymicDto } from './set-patronymic';
import { isOnlyOneWord, isOnlyRussian } from '../../../domain/testers';

export const setPatronymicValidator: TValidator<ISetPatronymicDto> = async req => {
    const { patronymic } = req.body;

    if (!isOnlyRussian(patronymic) || !isOnlyOneWord(patronymic)) {
        return CLIENT_ERRORS.BAD_NAME;
    }
};
