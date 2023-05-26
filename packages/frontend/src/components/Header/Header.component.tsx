import { FC } from 'react';
import { Nav } from './nav/nav.component';

import { Breadcrumbs } from '../ui-kit/breadcrumbs/breadcrumbs.component';

import css from './Header.module.css';

import type { IHeader } from './header';

export const Header: FC<IHeader> = ({ withNav }) => {
  return (
    <>
      <div className={css.header__breadcrumbs}>
        <Breadcrumbs />
      </div>
      <div className={css.header__nav}>{withNav && <Nav />}</div>
    </>
  );
};
