import { ERoles } from '../../../../bd';
import { TValidator } from '../../../../domain/types';
import { CLIENT_ERRORS } from '../../../../domain/errors';

export const getNotApprovedTasksListValidator: TValidator<null> = async req => {
    const role = req.user?.claims.role;

    if (role !== ERoles.Admin) {
        return CLIENT_ERRORS.LACK_OF_RIGHTS;
    }
};
