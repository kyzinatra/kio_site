import { FC } from 'react';
import css from './error-info-title.module.css';
import {Link} from "../../../../components/ui-kit/link/link.component";
import {ROUTES} from "../../../../constants/routes";
import { IErrorInfoTitle } from '@pages/error/error-info/error-info-title/error-info-title';
export const ErrorInfoTitleComponent: FC<IErrorInfoTitle> = ({title}) => {

  return (
    <p className={css.errorInfo__title}>{title}
      <Link to={ROUTES.DEFAULT_ROUTE} className={css['errorInfo__link']} theme="underline">
        Домой
      </Link>
    </p>
  );
};


