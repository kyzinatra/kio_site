import React, { FC, PropsWithChildren, useCallback } from 'react';
import { ILink, TLinkClassNames } from './link';
import { NavLink } from 'react-router-dom';

import css from './link.module.css';
import { clx } from '../../../utils/clx';

export const Link: FC<PropsWithChildren<ILink>> = ({
  children,
  theme = 'default',
  size,
  className,
  ...props
}) => {
  const classNameFn = useCallback(
    (attrs: TLinkClassNames) => {
      let dropClassNames = className;
      if (typeof className === 'function') dropClassNames = className(attrs);
      return clx(css[`link_size-${size}`], css[`link_${theme}`], dropClassNames);
    },
    [theme, className]
  );

  return (
    <NavLink className={classNameFn} {...props}>
      {children}
    </NavLink>
  );
};
