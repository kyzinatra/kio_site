import { IMeResponse } from '../../api/api';
import { BASE_URL } from '../../api/constants/base';
import { makeRequest } from '../../api/makeRequest';

import { useQuery } from '@tanstack/react-query';
import { TError } from '../../api/api';
import { QUERY_KEYS } from '../../api/constants/keys';

const ME_URL = `${BASE_URL}/ME_QUERY`;

export async function meRequest() {
  return makeRequest<IMeResponse>(ME_URL);
}

export const useMeRequest = () =>
  useQuery<IMeResponse, TError>({
    queryKey: [QUERY_KEYS.ME],
    queryFn: () => meRequest(),
    staleTime: Infinity
  });
