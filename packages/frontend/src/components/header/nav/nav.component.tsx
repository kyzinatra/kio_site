import React, { FC, useState, MouseEvent } from 'react';

import css from './nav.module.css';

import { NAV_ROUTES } from './routes';
import { clx } from '../../../utils/clx';
import { IHoverStyle } from './nav';
import { ROUTES } from '../../../constants/routes';
import { Link } from '../../ui-kit/link/link.component';
import { useMeRequest } from '../../../packages/hooks/use-query/use-me-request';
import { Badge } from '../../ui-kit/badge/badge.component';

export const Nav: FC = () => {
  const [hoverStyle, setHoverStyle] = useState<IHoverStyle>();

  const { isError, isLoading, data } = useMeRequest();
  const isSingInDisplayed = isError || isLoading;

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
            <Link
              className={({ isActive }) => clx(css.nav__link, { [css.nav__link_active]: isActive })}
              to={el.path}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={css.nav__sing}>
        {isSingInDisplayed ? (
          <>
            <Link to={ROUTES.SING_IN_ROUTE}>Войти</Link>
            <Link to={ROUTES.SING_UP_ROUTE} theme="accent">
              Регистрация
            </Link>
          </>
        ) : (
          <Badge src={data?.avatarUrl || ''} alt="Аватар">
            {data?.name}
          </Badge>
        )}
      </div>
    </nav>
  );
};
