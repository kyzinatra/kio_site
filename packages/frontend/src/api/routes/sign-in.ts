import { ISignInResponse, ISignInDto } from '../api';
import { BASE_URL } from '../constants/base';
import { makeRequest } from '../makeRequest';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TError } from '../api';
import { QUERY_KEYS } from '../constants/keys';
import { useToast } from '@hooks/use-toast';

const SIGN_IN_URL = `${BASE_URL}/SIGN_IN_QUERY`;

export async function signInRequest(body: ISignInDto) {
  return makeRequest<ISignInResponse>(SIGN_IN_URL, {
    body
  });
}

// TODO вынести логику onError отдельно
export const useSignInMutation = () => {
  const client = useQueryClient();
  const toast = useToast();

  return useMutation<ISignInResponse, TError, ISignInDto>({
    mutationKey: [QUERY_KEYS.SIGN_IN],
    mutationFn: signInRequest,
    retry: 1,
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.ME]);
    },
    onError(error: TError) {
      toast.push({ title: error.message, theme: 'error' });
    }
  });
};
