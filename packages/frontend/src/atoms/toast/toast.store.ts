import { atom } from 'jotai';
import { IToastItem } from './toast';

const toastAtom = atom<IToastItem[]>([]);

export const readToastAtom = atom(get => get(toastAtom));

export const pushToastAtom = atom(null, (get, set, update: IToastItem) =>
  set(toastAtom, [...get(toastAtom), update])
);

export const removeToastAtom = atom(null, (get, set, id: string) =>
  set(
    toastAtom,
    get(toastAtom).filter(el => el.id !== id)
  )
);
