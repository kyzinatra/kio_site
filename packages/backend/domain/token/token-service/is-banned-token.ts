import { refreshTokenBlacklist } from './refresh-token-blacklist';

type TIsBannedToken = (date: { token: string }) => boolean;

export const isBannedToken: TIsBannedToken = ({ token }) => {
    return !!refreshTokenBlacklist[token];
};
