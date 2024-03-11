import { TController } from '../../../../domain/types';
import { User } from '../../../../bd';
import { CLIENT_ERRORS } from '../../../../domain/errors';
import { ISetAvatarResponse, ISetAvatarDto } from './set-avatar';
import { removeFile } from '../../../../domain/utils/remove-file';
import { saveFile } from '../../../../domain/utils/save-file';

export const setAvatarController: TController<ISetAvatarDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXISTS.code).json(CLIENT_ERRORS.USER_DOESNT_EXISTS);
        return;
    }

    const file = Array.isArray(req.files!.file) ? req.files!.file[0] : req.files!.file;

    if (user.avatarUrl) {
        removeFile({ link: user.avatarUrl });
    }

    user.avatarUrl = await saveFile({ objectId: user._id, file });
    await user.save();

    const response: ISetAvatarResponse = { status: 'ok' };

    resp.status(200).json(response);
};
