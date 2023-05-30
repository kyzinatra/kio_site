import { useQuery } from 'react-query';
import { meRequest } from '../../api/';
import { IMeResponse, TError } from '../../api/api';

const meKey = Symbol('me-request');

export const useMeRequest = () =>
  useQuery<IMeResponse, TError>({
    queryKey: [meKey],
    queryFn: meRequest,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false
  });
