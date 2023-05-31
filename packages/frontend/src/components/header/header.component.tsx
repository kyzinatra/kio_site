import { FC } from 'react';
import { Nav } from './nav/nav.component';

import { Breadcrumbs } from '../ui-kit/breadcrumbs/breadcrumbs.component';

import css from './header.module.css';

import type { IHeader } from './header';

export const Header: FC<IHeader> = ({ withNav, withHelp }) => {
  return (
    <>
      <div className={css.header__breadcrumbs}>
        <Breadcrumbs withHelp={withHelp} />
      </div>
      {withNav && (
        <div className={css.header__nav}>
          <Nav />
        </div>
      )}
    </>
  );
};