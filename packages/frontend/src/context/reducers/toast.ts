import { createRef } from 'react';
import { IActionType, IState } from '../context';
import { IToast } from '../../components/toast/toast';

export const PUSH_TOAST = 'PUSH_TOAST';
export const DELETE_TOAST = 'DELETE_TOAST';

export function initial(): IState {
  return {
    toasts: []
  };
}

export function reducer(prev: IState, action: IActionType): IState {
  if (!action) return initial();

  let toasts = [...prev.toasts];
  const payload = action.payload;

  switch (action.type) {
    case PUSH_TOAST:
      toasts.push({
        ...(payload as IToast),
        id: crypto.randomUUID(),
        nodeRef: createRef<HTMLDivElement>()
      });
      return { toasts: toasts };

    case DELETE_TOAST:
      toasts = toasts.filter(el => el.id !== (payload as { id: string }).id);
      return { toasts: toasts };
  }
  return initial();
}
