import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { routesData } from '../constants/routes';
import type { IRoutesResult, TRoutesNames } from '../types/routes';

export function useBreadcrumbs() {
  const location = useLocation();
  return useMemo(() => {
    const path = location.pathname.replaceAll('/', ' ').trim().split(' ');
    if (path[0]) path.unshift('');

    const result: IRoutesResult = path.reduce((last: IRoutesResult, el) => {
      last.push({
        ...routesData[`/${el}` as TRoutesNames],
        path: (last[last.length - 1]?.path || '') + el + '/'
      });
      return last;
    }, []);

    if (result.length > 1) result[0].title = '';

    return result;
  }, [location.pathname]);
}
