import { TValidator } from '../../../domain/types/validator.type';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { isOnlyRussian, isOnlyOneWord } from '../../../domain/testers';
import { ISetNameDto } from './set-name';

export const setNameValidator: TValidator<ISetNameDto> = async req => {
    const { name } = req.body;

    if (!isOnlyRussian(name) || !isOnlyOneWord(name)) {
        return CLIENT_ERRORS.BAD_NAME;
    }
};
