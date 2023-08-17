import css from './splash.module.css';
import { FC } from 'react';
import { Link } from '../../components/ui-kit/link/link.component';
import { Loader } from '../../components/ui-kit/loader/loader.component';
import { ROUTES } from '../../constants/routes';
import { ISplashScreen } from '@pages/splash/splash';

export const SplashScreen: FC<ISplashScreen> = ({ theme }) => {
  return (
    <main className={css.page}>
      <Loader theme={theme} />
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
