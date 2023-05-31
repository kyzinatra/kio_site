import React, { FC, PropsWithChildren } from 'react';
import { IBadge } from './badge';

import css from './badge.module.css';
import { Link } from '../link/link.component';

export const Badge: FC<PropsWithChildren<IBadge>> = ({ children, src, to, height = 30, width = 30 }) => {
  const content = (
    <figure className={css.badge}>
      <img src={src} width={width} height={height} />
      <figcaption>{children}</figcaption>
    </figure>
  );
  return to ? <Link to={to}>{content}</Link> : content;
};