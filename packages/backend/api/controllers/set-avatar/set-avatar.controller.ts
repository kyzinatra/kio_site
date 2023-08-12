import { UploadedFile } from 'express-fileupload';
import { randomUUID } from 'crypto';
import { existsSync, mkdirSync, unlink } from 'fs';
import path from 'path';

import { TController } from '#domain/types';
import { User } from '#bd';
import { CLIENT_ERRORS } from '#domain/errors';
import { ISetAvatarResponse, ISetAvatarDto } from './set-avatar';

export const setAvatarController: TController<ISetAvatarDto> = async (req, resp) => {
    const user = await User.findOne({ email: req.user?.email });

    if (!user) {
        resp.status(CLIENT_ERRORS.USER_DOESNT_EXISTS.code).json(CLIENT_ERRORS.USER_DOESNT_EXISTS);
        return;
    }

    const file = req.files?.file as UploadedFile;

    const staticDir = process.env.STATIC_DIR ?? 'public';
    const folderName = `files/${user._id}`;
    const fileName = randomUUID() + path.extname(file.name);
    const dir = staticDir + '/' + folderName;

    if (!existsSync(dir)) {
        mkdirSync(dir);
    }

    await file.mv(`${dir}/${fileName}`);

    if (user.avatarUrl) {
        unlink(staticDir + '/' + user.avatarUrl, _ => {});
    }

    user.avatarUrl = folderName + '/' + fileName;
    await user.save();

    const response: ISetAvatarResponse = { status: 'ok' };

    resp.status(200).json(response);
};
