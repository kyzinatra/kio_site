import React from 'react';
import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs.hook';

import css from './Breadcrumbs.module.css';
import { Link } from 'react-router-dom';

export const Breadcrumbs = () => {
  const breadcrumbsData = useBreadcrumbs();

  return (
    <div className={css.breadcrumbs}>
      {breadcrumbsData.map(el => (
        <React.Fragment key={el.path}>
          <Link className={css.breadcrumbs__item} to={el.path}>
            <img
              className={css.breadcrumbs__img}
              src={el.icon}
              alt={el.title || 'Иконка страницы'}
              width="30"
              height="30"
            />
            {el.title && <p className={css.breadcrumbs__title}>{el.title}</p>}
          </Link>
          <span className={css.breadcrumbs__separator}>{'/'}</span>
        </React.Fragment>
      ))}
    </div>
  );
};
