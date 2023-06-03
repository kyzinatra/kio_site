import { refreshTokenBlacklist, TTokenBannedReason } from './refresh-token-blacklist';

type TBanToken = (date: { token: string; banReason: TTokenBannedReason }) => void;

export const banToken: TBanToken = ({ token, banReason }) => {
    refreshTokenBlacklist[token] = { reason: banReason, date: new Date() };
};
