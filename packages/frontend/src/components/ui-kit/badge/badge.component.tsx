import React, { FC, PropsWithChildren } from 'react';
import { IBadge } from './badge';

import css from './badge.module.css';
import { Link } from '../link/link.component';

export const Badge: FC<PropsWithChildren<IBadge>> = ({ children, src, to, height = 30, width = 30 }) => {
  return (
    <figure className={css.badge}>
      <img src={src} width={width} height={height} />
      <figcaption>{to ? <Link to={to}>{children}</Link> : children}</figcaption>
    </figure>
  );
};
