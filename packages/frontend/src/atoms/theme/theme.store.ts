import { atomWithStorage } from 'jotai/utils';

export const themeAtom = atomWithStorage<string>('mode', 'light');
