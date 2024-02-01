import { FC } from 'react';

import css from './vertical-navbar.module.css';
import { IVerticalNavbar } from './vertical-navbar';
import { NavbarItem } from './navbar-item/navbar-item.component';

export const VerticalNavbar: FC<IVerticalNavbar> = ({ items, routes }) => {
  let isActiveNavbarItem = 0;

  return (
    <div>
      <ul className={css.navbar}>
        {items.map((el: string, index: number) => (
          <NavbarItem
            onClick={() => isActiveNavbarItem = index}
            route={routes[index]}
            item={el}
            isActive={isActiveNavbarItem === index ? 'active' : 'default'}
            key={`${index}`}
          />
        ))}
      </ul>
    </div>
  );
};
