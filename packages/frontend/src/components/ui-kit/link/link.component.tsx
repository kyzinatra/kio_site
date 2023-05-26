import React, { FC, PropsWithChildren, useCallback } from 'react';
import { ILink, TLinkClassNames } from './link';
import { NavLink } from 'react-router-dom';

import css from './link.module.css';
import { clx } from '../../../utils/clx';

export const Link: FC<PropsWithChildren<ILink>> = ({ children, theme = 'default', className, ...props }) => {
  const classNameFn = useCallback(
    (attrs: TLinkClassNames) => {
      if (typeof className === 'function') return clx(css[`link_${theme}`], className(attrs));
      return clx(css[`link_${theme}`], className);
    },
    [theme, className]
  );

  return (
    <NavLink className={classNameFn} {...props}>
      {children}
    </NavLink>
  );
};
