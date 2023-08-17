import { FC, PropsWithChildren, forwardRef, memo } from 'react';
import { IButton } from './button';
import { clx } from '@utils/clx';

import css from './button.module.css';

/**
 * @description Button component for displaying buttons on the page. Have some themes and sizes (see the IButton interface)
 * takes all the props of the button element and the theme and size props
 */
export const Button = memo(
  forwardRef<HTMLButtonElement, PropsWithChildren<IButton>>(
    ({ children, className, stretch, theme = 'default', size = 'default', ...props }, forRef) => {
      return (
        <button
          {...props}
          ref={forRef}
          className={clx(className, css.button_base, css[`button_${theme}`], css[`button_size-${size}`], {
            [css.button_stretch]: stretch
          })}
        >
          {children}
        </button>
      );
    }
  )
);

Button.displayName = 'memo(Button)';
