import { TError } from './api';

async function checkRequest(res: Response) {
  if (res.ok) {
    console.log(res);
    return res.json();
  }

  const obj = await res.json();
  return Promise.reject(obj);
}

export async function makeRequest<T>(url: string, method?: RequestInit) {
  console.log('Fetching ' + url);
  return await fetch(url, {
    method: 'GET',
    ...method,
    headers: { ...(method?.headers || {}), 'Content-Type': 'application/json' },
    redirect: 'follow'
  }).then<T>(checkRequest);
}
