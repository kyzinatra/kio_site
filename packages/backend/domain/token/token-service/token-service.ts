import { createRefreshToken } from './refresh-token';
import { verifyRefreshToken } from './refresh-token';
import { banToken } from './ban-token';
import { isBannedToken } from './is-banned-token';

export const tokenService = {
    ban: banToken,
    createRefresh: createRefreshToken,
    verifyRefresh: verifyRefreshToken,
    isBanned: isBannedToken
};
