import React, { FC } from 'react';

import css from './Breadcrumbs.module.css';
import { Link } from 'react-router-dom';
import { ICON_HEIGHT, ICON_WIDTH } from '../../../constants/sizes';
import { IBreadcrumbs } from './breadcrumbs';
import { Badge } from '../badge/badge.component';
import { useBreadcrumbs } from '../../../hooks/use-breadcrumbs.hook';

/**
 * @description Breadcrumbs component for displaying breadcrumbs on the page
 * @param {boolean} withHelp - if true, renders the help button on the right side
 */

export const Breadcrumbs: FC<IBreadcrumbs> = ({ withHelp }) => {
  const breadcrumbsData = useBreadcrumbs();

  return (
    <div className={css.breadcrumbs__wrapper}>
      <div className={css.breadcrumbs}>
        {breadcrumbsData.map(el => (
          <React.Fragment key={el.path}>
            <Link className={css.breadcrumbs__item} to={el.path}>
              <img
                className={css.breadcrumbs__img}
                src={el.icon}
                alt={el.title || 'Иконка страницы'}
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
              {el.title && <p className={css.breadcrumbs__title}>{el.title}</p>}
            </Link>
            <span className={css.breadcrumbs__separator}>{'/'}</span>
          </React.Fragment>
        ))}
      </div>
      {withHelp && (
        <Badge src="/help.svg" to="/help">
          Помощь
        </Badge>
      )}
    </div>
  );
};
