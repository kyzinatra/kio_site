import { ISingUpDto, ISingUpResponse } from '../api';
import { BASE_URL } from '../config';
import { makeRequest } from '../makeRequest';

const SING_UP_URL = `${BASE_URL}/SIGN_UP_QUERY`;

export async function singUpRequest(body: ISingUpDto) {
  return await makeRequest<ISingUpResponse>(SING_UP_URL, {
    body: JSON.stringify(body)
  });
}
