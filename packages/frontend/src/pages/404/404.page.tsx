import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import css from './404.module.css';
export const Page404 = () => {
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) return <h1 className={css.page}>{'Это какая-то странная ошибка. :('}</h1>;

  return (
    <main>
      <p className={css.page}>{`Ошибка ${error.status}. ${error.statusText}`}</p>
    </main>
  );
};
