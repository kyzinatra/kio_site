import { FC, PropsWithChildren, memo } from 'react';
import { IBadge } from './badge';

import css from './badge.module.css';
import { Link } from '../link/link.component';

/**
 * @description Badge component for displaying badges
 * @param {string} src - image source
 * @param {string} to - link to
 * @param {number} height - image height
 * @param {number} width - image width
 * @param {ReactNode} children - badge text
 */
export const Badge: FC<PropsWithChildren<IBadge>> = memo(({ children, src, to, height = 30, width = 30 }) => {
  const content = (
    <figure className={css.badge}>
      <img src={src} width={width} height={height} />
      <figcaption>{children}</figcaption>
    </figure>
  );
  return to ? <Link to={to}>{content}</Link> : content;
});

Badge.displayName = 'memo(Badge)';
