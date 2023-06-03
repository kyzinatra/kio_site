export type TTokenBannedReason = 'expired' | 'logout';

interface ITokenBaned {
    reason: TTokenBannedReason;
    date: Date;
}

export const refreshTokenBlacklist: Record<string, ITokenBaned> = {};
