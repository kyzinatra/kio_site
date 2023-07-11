import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import css from './error.module.css';
import { SplashScreen } from '../splash-screen/splash-screen.page';
import { EngTextComponent } from './song-text/song-text.component';
import { ErrorInfo } from './error-info/error-info.component';

export const Error = ({ title = 'Такой страницы не существует.' }) => {
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) return <h1 className={css.page}>{'Это какая-то странная ошибка. :('}</h1>;

  return (
    <main className={css.page}>
      <SplashScreen theme="blueToСyan" percent={12} />
      <ErrorInfo status={error.status} title={title} />
      <EngTextComponent />
    </main>
  );
};
