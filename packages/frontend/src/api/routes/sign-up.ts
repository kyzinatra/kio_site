import { useQueryClient } from '@tanstack/react-query';
import { ISignUpDto, ISignUpResponse, TError } from '../api';
import { BASE_URL } from '../constants/base';
import { makeRequest, useAppMutation } from '../utils';
import { QUERY_KEYS } from '../constants/keys';

const SIGN_UP_URL = `${BASE_URL}/SIGN_UP_QUERY`;

export async function signUpRequest(body: ISignUpDto) {
  return makeRequest<ISignUpResponse>(SIGN_UP_URL, {
    body
  });
}

export const useSignUpMutation = () => {
  const client = useQueryClient();

  return useAppMutation<ISignUpResponse, TError, ISignUpDto>({
    mutationKey: [QUERY_KEYS.SIGN_UP],
    mutationFn: signUpRequest,
    retry: 1,
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.ME]);
    }
  });
};
