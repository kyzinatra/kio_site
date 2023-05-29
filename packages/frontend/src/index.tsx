import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Page404 } from './pages/404/404.page';
import { ROUTES } from './constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('./pages/home/home.page')).Home };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.TASKS_ROUTE,
    async lazy() {
      return { Component: (await import('./pages/home/home.page')).Home };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.SING_IN_ROUTE,
    async lazy() {
      return { Component: (await import('./pages/sin-in/sing-in.page')).SingIn };
    },
    errorElement: <Page404 />
  },
  {
    path: ROUTES.SING_UP_ROUTE,
    async lazy() {
      return { Component: (await import('./pages/sing-up/sing-up.page')).SingUp };
    },
    errorElement: <Page404 />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
