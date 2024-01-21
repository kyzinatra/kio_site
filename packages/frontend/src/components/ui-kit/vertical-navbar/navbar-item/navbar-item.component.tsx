import { FC } from 'react';

import css from './navbar-item.module.css';
import { INavbarItem } from './navbar-item';
import { clx } from '@utils/clx';
import { Link } from '@components/ui-kit/link/link.component';

export const NavbarItem: FC<INavbarItem> = ({ routes, item, itemClass, setNewActiveNavbarItem, itemNumber }) => {
  return (
    <li className={css.navbar__item} onClick={()=>setNewActiveNavbarItem(itemNumber)}>
      <Link 
        className={clx(css[`navbar__item-link`], css[`navbar__item-link__${itemClass}`])} 
        to={`${routes}`}
      >
        {item}
      </Link>
    </li>
  );
};