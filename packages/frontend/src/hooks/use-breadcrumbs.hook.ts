import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { routesData } from '../constants/routes';
import type { TRoutesResult, TRoutesNames } from '../types/routes';

/**
 * @description Hook for getting breadcrumbs from current location
 * @example
 * const breadcrumbs = useBreadcrumbs();
 * console.log(breadcrumbs); // [{title: 'Home', path: '/', icon: './icon.svg'}, {title: 'About', path: '/about/', , icon: './icon.svg'}]
 */

export function useBreadcrumbs(): TRoutesResult {
  const location = useLocation();
  return useMemo(() => {
    const path = location.pathname.replaceAll('/', ' ').trim().split(' ');
    if (path[0]) path.unshift('');

    const result: TRoutesResult = path.reduce((last: TRoutesResult, el) => {
      last.push({
        icon: routesData[`/${el}` as TRoutesNames]?.icon || '',
        title: routesData[`/${el}` as TRoutesNames]?.title || '',
        path: (last[last.length - 1]?.path || '') + el + '/'
      });
      return last;
    }, []);

    if (result.length > 1) result[0].title = '';

    return result;
  }, [location.pathname]);
}
