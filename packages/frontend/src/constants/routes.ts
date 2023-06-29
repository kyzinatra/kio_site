import type { TRoutesData } from '../types/routes';

export const ROUTES = {
  DEFAULT_ROUTE: '/',
  TASKS_ROUTE: '/tasks',
  CONSTRUCTORS_ROUTE: '/constructors',
  RESULTS_ROUTE: '/results',
  EXAMPLES_ROUTE: '/examples',
  ABOUT_ROUTE: '/about',
  SIGN_IN_ROUTE: '/sign-in',
  SIGN_UP_ROUTE: '/sign-up',
  PAGE_404_ROUTE: '/404',
  PROFILE_ROUTE: '/profile',
  FORGOT_PASSWORD_ROUTE: '/forgot-password',
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
  [ROUTES.SIGN_IN_ROUTE]: {
    icon: '/sign-in-icon.svg',
    title: 'Войти'
  },
  [ROUTES.SIGN_UP_ROUTE]: {
    icon: '/sign-in-icon.svg',
    title: 'Регистрация'
  }
} as const;
