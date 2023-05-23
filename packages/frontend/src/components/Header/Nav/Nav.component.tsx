import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import { navRoutes } from './routes';
export const Nav: FC = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__list}>
        {navRoutes.map(el => (
          <li className={css.nav__item}>
            <NavLink
              className={({ isActive }) => css.nav__link + ' ' + (isActive && css.nav__link_active)}
              to={el.path}
            >
              {el.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
