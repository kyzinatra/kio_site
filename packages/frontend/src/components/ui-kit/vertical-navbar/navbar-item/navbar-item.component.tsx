import { FC } from 'react';

import css from './navbar-item.module.css';
import { INavbarItem } from './navbar-item';
import { clx } from '@utils/clx';
import { Link } from '@components/ui-kit/link/link.component';

export const NavbarItem: FC<INavbarItem> = ({ route, item, isActive, onClick }) => {
  return (
    <li className={css.navbar__item} onClick={onClick}>
      <Link 
        className={clx(css[`navbar__item-link`], css[`navbar__item-link__${isActive}`])} 
        to={route}
      >
        {item}
      </Link>
    </li>
  );
};