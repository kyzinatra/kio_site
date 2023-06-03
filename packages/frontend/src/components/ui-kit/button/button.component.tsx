import React, { FC, PropsWithChildren } from 'react';
import { IButton } from './button';
import { clx } from '../../../utils/clx';

import css from './button.module.css';

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  theme = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clx(className, css.button_base, css[`button_${theme}`], css[`button_size-${size}`])}
    >
      {children}
    </button>
  );
};
