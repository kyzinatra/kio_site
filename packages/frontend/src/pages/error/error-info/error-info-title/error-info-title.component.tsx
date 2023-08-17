import { FC } from 'react';
import css from './error-info-title.module.css';
import { Link } from '@components/ui-kit/link/link.component';
import { ROUTES } from '@constants/routes';
import { IErrorInfoTitle } from '@pages/error/error-info/error-info-title/error-info-title';

export const ErrorInfoTitle: FC<IErrorInfoTitle> = ({ title }) => {
  return (
    <div className={css.errorInfo__title}>
      <p>{title}</p>
      <Link to={ROUTES.DEFAULT_ROUTE} className={css['errorInfo__link']} theme="underline">
        Вернуться домой
      </Link>
    </div>
  );
};
