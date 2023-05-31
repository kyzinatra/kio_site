import { ISignInResponse, ISingInDto } from '../api';
import { BASE_URL } from '../constants/base';
import { makeRequest } from '../makeRequest';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TError } from '../api';
import { QUERY_KEYS } from '../constants/keys';

const SING_IN_URL = `${BASE_URL}/SIGN_IN_QUERY`;

export async function singInRequest(body: ISingInDto) {
  return makeRequest<ISignInResponse>(SING_IN_URL, {
    body
  });
}

export const useSingInMutation = (callbackSuccess?: () => void, callbackError?: () => void) => {
  const client = useQueryClient();

  return useMutation<ISignInResponse, TError, ISingInDto>({
    mutationKey: [QUERY_KEYS.SIGN_IN],
    mutationFn: body => singInRequest(body),
    retry: 1,
    onSuccess: () => {
      callbackSuccess?.();
      client.invalidateQueries([QUERY_KEYS.ME]);
    },
    onError: () => {
      callbackError?.();
    }
  });
};
