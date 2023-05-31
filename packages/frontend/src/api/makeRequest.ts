import { TError } from './api';

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
