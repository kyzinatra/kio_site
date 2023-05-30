import { useQuery } from '@tanstack/react-query';
import { ISignInResponse, TError } from '../../api/api';
import { singInRequest } from '../../api/routes/sing-in';

export const useSingInRequest = () =>
  useQuery<ISignInResponse, TError>({
    queryKey: ['sing-in-request'],
    queryFn: () =>
      singInRequest({
        email: 'vlad@gmail.com',
        password: 'mypass123'
      })
  });
