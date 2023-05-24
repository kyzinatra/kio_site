import React, { FC, useState, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Nav.module.css';

import { NAV_ROUTES } from './routes';
import { clx } from '../../../utils/clx';
import { IHoverStyle } from './nav';

export const Nav: FC = () => {
  const [hoverStyle, setHoverStyle] = useState<IHoverStyle>();

  function mouseEnterHandler(event: MouseEvent<HTMLElement>) {
    const element = event.target;
    if (!(element instanceof HTMLElement)) return;

    const childLink = (element.closest('li') as HTMLElement).childNodes[0] as HTMLAnchorElement;

    setHoverStyle({
      transform: `translateY(-50%) translateX(${childLink.offsetLeft - 5}px)`,
      width: childLink.clientWidth + 10 + 'px'
    });
  }
  function mouseLeaveHandler() {
    setHoverStyle(last => ({ ...last, opacity: 0 }));
  }

  return (
    <nav className={css.nav}>
      <ul className={css.nav__list}>
        <div className={css.nav__hover} style={hoverStyle}></div>
        {NAV_ROUTES.map(el => (
          <li
            className={css.nav__item}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            key={el.path}
          >
            <NavLink
              className={({ isActive }) => clx(css.nav__link, { [css.nav__link_active]: isActive })}
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
