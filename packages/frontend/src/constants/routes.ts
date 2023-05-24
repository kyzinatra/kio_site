import type { TRoutesData } from '../types/routes';

export const ROUTES = {
  DEFAULT_ROUTE: '/',
  TASKS_ROUTE: '/tasks',
  CONSTRUCTORS_ROUTE: '/constructors',
  RESULTS_ROUTE: '/results',
  EXAMPLES_ROUTE: '/examples',
  ABOUT_ROUTE: '/about'
} as const;

export const routesData: TRoutesData = {
  [ROUTES.DEFAULT_ROUTE]: {
    icon: '/home-icon.svg',
    title: 'КИО'
  },
  [ROUTES.TASKS_ROUTE]: {
    icon: '/tasks-icon.svg',
    title: 'Задачи'
  }
} as const;
