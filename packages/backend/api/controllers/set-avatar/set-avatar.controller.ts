import { TController } from '../../../domain/types/contoller.type';
import { User } from '../../../bd';
import { CLIENT_ERRORS } from '../../../domain/errors/client-errors';
import { ISetAvatarResponse, ISetAvatarDto } from './set-avatar';
import { UploadedFile } from 'express-fileupload';
import { randomUUID } from 'crypto';
import { existsSync, mkdirSync, unlink } from 'fs';

export const setAvatarController: TController<ISetAvatarDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXITS.code).json(CLIENT_ERRORS.USER_DOESNT_EXITS);
        return;
    }

    const file = req.files?.file as UploadedFile;

    if (!file) {
        resp.status(CLIENT_ERRORS.BAD_DTO.code).json(CLIENT_ERRORS.BAD_DTO);
        return;
    }

    const staticDir = process.env.STATIC_DIR ?? 'public';
    const folderName = `files/${user._id}`;
    const fileName = randomUUID() + '.' + file.name.split('.')[1];
    const dir = staticDir + '/' + folderName;

    if (!existsSync(dir)) {
        mkdirSync(dir);
    }

    await file.mv(`${dir}/${fileName}`);

    if (user.avatarUrl) {
        unlink(staticDir + '/' + user.avatarUrl, err => {});
    }

    user.avatarUrl = folderName + '/' + fileName;
    await user.save();

    const response: ISetAvatarResponse = { status: 'ok' };

    resp.status(200).json(response);
};
