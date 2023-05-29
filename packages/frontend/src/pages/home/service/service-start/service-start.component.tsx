import React from 'react';

import css from './service-start.module.css';
import { ROUTES } from '../../../../constants/routes';
import { Link } from '../../../../components/ui-kit/link/link.component';

export const ServiceStart = () => {
  // TODO: Как  я пойму как сделать так, чтобы это выглядело не как дохлая псина я поправлю. Пока такой дизайн.
  return (
    <section className={css.start}>
      <p className={css.start__title}>Начни свой путь вместе с нами</p>
      <div className={css.start__links}>
        <Link className={css.start__link} to={ROUTES.EXAMPLES_ROUTE} theme="accent" size="xxlong">
          Примеры задач прошлых лет
        </Link>
        <Link className={css.start__link} to={ROUTES.SING_UP_ROUTE} theme="accent" size="xxlong">
          Зарегестироваться на конкурс
        </Link>
      </div>
    </section>
  );
};
