import React, { FC, memo } from 'react';
import { IInput } from './input';
import { clx } from '@utils/clx';

import css from './input.module.css';
import { propsAreEqual } from '@utils/propsAreEqual';

/**
 * @description Input component for displaying inputs on the page. Takes all the props of the input element and the stretch prop (boolean)
 */
export const Input: FC<IInput> = memo(({ className, stretch, isError, ...props }) => {
  return (
    <input
      className={clx(className, css.input, { [css.input_stretch]: stretch, [css.input_error]: isError })}
      placeholder="Начните писать..."
      {...props}
    />
  );
}, propsAreEqual);

Input.displayName = 'memo(Input)';
