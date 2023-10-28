import { EErrorNames } from '@api/api';

export const AUTH_ERRORS: { [key in EErrorNames]?: key } = {
  UNAUTHORIZED: 'UNAUTHORIZED'
};
