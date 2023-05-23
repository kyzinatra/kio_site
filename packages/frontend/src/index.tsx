import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/normalize.css';
import './styles/index.css';
import { Page404 } from './pages/404/404.page';

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      let { Home } = await import('./pages/Home/Home.page');
      return { Component: Home };
    },
    errorElement: <Page404 />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
