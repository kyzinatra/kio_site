import { useContext, useMemo } from 'react';
import { ToastContextDispatch } from '../context';
import { PUSH_TOAST } from '../context/reducers/toast';
import { IToast } from '../components/toast/toast';

/**
 * @description Hook for pushing toast messages
 * @example
 * const toast = useToast();
 * toast.push({ title: 'Hello', theme: 'success' });
 */
export function useToast() {
  const dispatch = useContext(ToastContextDispatch);

  return useMemo(() => {
    return {
      push(toast: IToast) {
        dispatch?.({
          type: PUSH_TOAST,
          payload: toast
        });
      }
    };
  }, []);
}
