import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import css from './error.module.css';
import { SongTextComponent } from './song-text/song-text.component';
import { ErrorInfoComponent } from './error-info/error-info.component';

export const Error = ({ title = 'Такой страницы не существует.' }) => {
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) return <h1 className={css.page}>{'Это какая-то странная ошибка. :('}</h1>;

  if (!isRouteErrorResponse(error)) return (
    <main className={css.page}>
      <ErrorInfoComponent status={error.status} title={title} /> */}
      <SongTextComponent />
    </main>
  );
};
