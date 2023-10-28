import { createRef, useMemo } from 'react';
import { useAtom } from 'jotai';
import { pushToastAtom } from '@atoms/index';

/**
 * @description Hook for pushing toast messages
 * @example
 * const toast = useToast();
 * toast.push({ title: 'Hello', theme: 'success' });
 */

type TToastInterface = {
  title: string;
  theme?: 'error' | 'info' | 'success' | 'warning';
  timeout?: string | number;
};

export function useToast() {
  const [, pushToast] = useAtom(pushToastAtom);

  return useMemo(() => {
    return {
      push(toast: TToastInterface) {
        pushToast({ ...toast, id: crypto.randomUUID(), nodeRef: createRef() });
      }
    };
  }, []);
}
