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
    path: ROUTES.SING_IN_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/sing-in/sing-in.page')).SingIn };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.SING_UP_ROUTE,
    async lazy() {
      return { Component: (await import('../pages/sing-up/sing-up.page')).SingUp };
    },
    errorElement: <Page404 />
  }
]);
