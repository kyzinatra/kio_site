import { FC } from 'react';
import { Nav } from './Nav/Nav.component';

import { Breadcrumbs } from '../UIKit/Breadcrumbs/Breadcrumbs.component';

import css from './Header.module.css';

import type { IHeader } from './Header';

export const Header: FC<IHeader> = ({ withNav }) => {
  return (
    <header className={css.header}>
      <div className={css.header__breadcrumbs}>
        <Breadcrumbs />
      </div>
      <div className={css.header__nav}>{withNav && <Nav />}</div>
    </header>
  );
};
