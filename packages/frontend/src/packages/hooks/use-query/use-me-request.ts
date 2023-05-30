import { useQuery } from '@tanstack/react-query';
import { meRequest } from '../../api/';
import { IMeResponse, TError } from '../../api/api';

export const useMeRequest = () =>
  useQuery<IMeResponse, TError>({
    queryKey: ['me-request'],
    queryFn: () => meRequest(),
    staleTime: Infinity
  });
