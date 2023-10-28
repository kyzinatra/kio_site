import { ROUTES } from '@constants/routes';

export const PROFILE_CONTENT = [
  {
    path: ROUTES.PROFILE_ROUTE,
    title: 'Профиль'
  },
  {
    path: ROUTES.SETTINGS_ROUTE,
    title: 'Настройки'
  },
  {
    path: ROUTES.PROFILE_CONSTRUCTORS_ROUTE,
    title: 'Конструкторы'
  },
  {
    path: ROUTES.PROFILE_TASKS_ROUTE,
    title: 'Задачи'
  }
] as const;
