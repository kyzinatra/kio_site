import css from './splash-screen.module.css';
import { FC } from 'react';
import { Link } from '../../components/ui-kit/link/link.component';
import { Loader } from '../../components/ui-kit/loader/loader.component';
import { ILoader } from '../../components/ui-kit/loader/loader';
import { ROUTES } from '../../constants/routes';
export const SplashScreen: FC<ILoader> = ({ theme, percent }) => {
  return (
    <main className={css.page}>
      <Loader theme={theme} percent={percent} />
      <div className={css['page-text']}>
        <span>Загрузка страницы...</span>
        <span className={css['page-text__contact']}>
          Если загрузка идет слишком долго
          <Link to={ROUTES.PAGE_404_ROUTE} className={css['page-text__link']} theme="underline">
            напишите нам
          </Link>
        </span>
      </div>
    </main>
  );
};
