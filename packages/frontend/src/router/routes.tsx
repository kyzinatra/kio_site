import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Page404 } from '../pages/404/404.page';

export const REACT_ROUTER = createBrowserRouter([
  {
    path: ROUTES.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/home/home.page')).Home };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.TASKS_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/home/home.page')).Home };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.SIGN_IN_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/sign-in/sign-in.page')).SignIn };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.SIGN_UP_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/sign-up/sign-up.page')).SignUp };
    },
    errorElement: <Page404 />
  }
]);
