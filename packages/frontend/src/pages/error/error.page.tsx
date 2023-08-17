import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import css from './error.module.css';
import { SongText } from './song-text/song-text.component';
import { ErrorInfo } from './error-info/error-info.component';
import { FC } from 'react';

export const Error: FC = () => {
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) return <h1 className={css.page}>{'Это какая-то странная ошибка. :('}</h1>;

  return (
    <main className={css.page}>
      <ErrorInfo status={error.status} title={error.statusText} />
      <SongText />
    </main>
  );
};
