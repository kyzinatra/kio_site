import { TValidator } from '../../../domain/types/validator.type';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { isOnlyRussian, isOnlyOneWord } from '../../../domain/testers';
import { ISetSurnameDto } from './set-surname';

export const setSurnameValidator: TValidator<ISetSurnameDto> = async req => {
    const { surname } = req.body;

    if (!isOnlyRussian(surname) || !isOnlyOneWord(surname)) {
        return CLIENT_ERRORS.BAD_NAME;
    }
};
