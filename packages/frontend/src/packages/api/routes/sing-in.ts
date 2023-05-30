import { ISignInResponse, ISingInDto } from '../api';
import { BASE_URL } from '../config';
import { makeRequest } from '../makeRequest';

const SING_IN_URL = `${BASE_URL}/SIGN_IN_QUERY`;

export async function singInRequest(body: ISingInDto) {
  return await makeRequest<ISignInResponse>(SING_IN_URL, {
    method: 'POST',
    body: JSON.stringify(body)
  });
}
