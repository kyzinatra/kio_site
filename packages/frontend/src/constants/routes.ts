import type { TRoutesData } from '../types/routes';

export const ROUTES = {
  DEFAULT_ROUTE: '/',
  TASKS_ROUTE: '/tasks',
  CONSTRUCTORS_ROUTE: '/constructors',
  RESULTS_ROUTE: '/results',
  EXAMPLES_ROUTE: '/examples',
  ABOUT_ROUTE: '/about',
  SING_IN_ROUTE: '/sing-in',
  SING_UP_ROUTE: '/sing-up',
  PAGE_404_ROUTE: '/404',
  HELP_ROUTE: '/help'
} as const;

export const routesData: TRoutesData = {
  [ROUTES.DEFAULT_ROUTE]: {
    icon: '/home-icon.svg',
    title: 'КИО'
  },
  [ROUTES.TASKS_ROUTE]: {
    icon: '/tasks-icon.svg',
    title: 'Задачи'
  },
  [ROUTES.SING_IN_ROUTE]: {
    icon: '/sing-in-icon.svg',
    title: 'Войти'
  },
  [ROUTES.SING_UP_ROUTE]: {
    icon: '/sing-in-icon.svg',
    title: 'Регистрация'
  }
} as const;
