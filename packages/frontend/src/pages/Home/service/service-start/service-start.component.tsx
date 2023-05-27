import React from 'react';

import css from './service-start.module.css';

import { Link } from '../../../../components/ui-kit/link/link.component';
import { ROUTES } from '../../../../constants/routes';

export const ServiceStart = () => {
  return (
    <section>
      <p>Начни свой путь вместе с нами</p>
      <div className="">
        <Link to={ROUTES.EXAMPLES_ROUTE} theme="accent">
          Примеры задач прошлых лет
        </Link>
        <Link to={ROUTES.EXAMPLES_ROUTE} theme="accent">
          Зарегестироваться на конкурс
        </Link>
      </div>
    </section>
  );
};
