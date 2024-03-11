import { unlink } from 'fs';

export const removeFile = ({ link }: { link: string }) => {
    const staticDir = process.env.STATIC_DIR ?? 'public';
    unlink(staticDir + '/' + link, _ => {});
};
