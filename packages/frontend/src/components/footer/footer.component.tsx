import { memo } from 'react';
import { FOOTER_CONTENT, FOOTER_CONTENT_TITLES } from './constants';
import { Link } from '../ui-kit/link/link.component';

import css from './footer.module.css';
import { ROUTES } from '../../constants/routes';

export const Footer = memo(() => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__grid}>
        <Link to={ROUTES.DEFAULT_ROUTE}>
          <figure className={css.footer__image}>
            <img src="/home-icon.svg" alt="" width={35} height={35} />
            <figcaption>КИО</figcaption>
          </figure>
        </Link>
        {FOOTER_CONTENT.map((column, i) => (
          <ul key={i} className={css.footer__list}>
            <li className={css.footer__item}>{FOOTER_CONTENT_TITLES[i]}</li>
            {column.map(([path, title], j) => (
              <li key={j} className={css.footer__item}>
                <Link to={path} theme="underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={css.footer__copyright}>
        <p>CopyRight &copy; 2013-2023 Центр информатизации образования «КИО». Все права защищены.</p>
        <div className={css.footer__created}>
          <p>Создатели: </p>
          <Link to="https://github.com/kyzinatra" theme="underline">
            kyzinatra
          </Link>
          <Link to="https://github.com/yandrinsky" theme="underline">
            yandrinsky
          </Link>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'memo(Footer)';
