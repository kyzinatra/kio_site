import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

import { Error } from '@pages/error/error.page';

export const REACT_ROUTER = createBrowserRouter([
  {
    path: ROUTES.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/home/home.page')).Home };
    },
    errorElement: <Error />
  },
  {
    path: ROUTES.TASKS_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/home/home.page')).Home };
    },
    errorElement: <Error />
  },
  {
    path: ROUTES.SIGN_IN_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/sign-in/sign-in.page')).SignIn };
    },
    errorElement: <Error />
  },
  {
    path: ROUTES.SIGN_UP_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/sign-up/sign-up.page')).SignUp };
    },
    errorElement: <Error />
  },
  {
    path: ROUTES.PROFILE_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/user-profile/profile.page')).UserProfile };
    },
    errorElement: <Error />
  }
]);
