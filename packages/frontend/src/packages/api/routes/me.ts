import { IMeResponse } from '../api';
import { BASE_URL } from '../config';
import { makeRequest } from '../makeRequest';

const ME_URL = `${BASE_URL}/ME_QUERY`;

export async function meRequest() {
  return await makeRequest<IMeResponse>(ME_URL);
}
