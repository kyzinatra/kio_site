import { useToast } from '@hooks/use-toast.hook';
import { useMutation } from '@tanstack/react-query';
import { TUseAppMutation } from './api';

type TOptions = {
  [key in Exclude<keyof RequestInit, 'body'>]?: RequestInit[key];
} & { body?: object };

async function checkRequest(res: Response) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(await res.json());
}

export async function makeRequest<T>(url: string, options?: TOptions) {
  let headers: HeadersInit = {};

  if (options?.method === 'POST' || options?.body) headers = { 'Content-Type': 'application/json' };

  return fetch(url, {
    method: options?.body ? 'POST' : 'GET',
    credentials: 'include',
    redirect: 'follow',
    ...options,
    body: options?.body && JSON.stringify(options?.body),
    headers: { ...(options?.headers || {}), ...headers }
  }).then<T>(checkRequest);
}

export const useAppMutation: TUseAppMutation = function (options, withSuccess = 'Запрос выполнен успешно!') {
  const toast = useToast();
  return useMutation({
    ...options,
    onError(error, variables, context) {
      if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        toast.push({ title: error.message, theme: 'error' });
        return;
      }

      if (error && typeof error === 'string') {
        toast.push({ title: error, theme: 'error' });
        return;
      }

      options?.onError?.(error, variables, context);
    },
    onSuccess(data, variables, context) {
      withSuccess && toast.push({ title: withSuccess, theme: 'success' });
      options?.onSuccess?.(data, variables, context);
    }
  });
};
