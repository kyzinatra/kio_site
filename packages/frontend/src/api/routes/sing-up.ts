import { ISingUpDto, ISingUpResponse } from '../../api/api';
import { BASE_URL } from '../../api/constants/base';
import { makeRequest } from '../../api/makeRequest';

const SING_UP_URL = `${BASE_URL}/SIGN_UP_QUERY`;

export async function singUpRequest(body: ISingUpDto) {
  return makeRequest<ISingUpResponse>(SING_UP_URL, {
    body
  });
}
