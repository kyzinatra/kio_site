import React, { FC } from 'react';
import { IInput } from './input';
import { clx } from '../../../utils/clx';

import css from './input.module.css';

export const Input: FC<IInput> = ({ className, stretch, ...props }) => {
  return (
    <input
      className={clx(className, css.input, { [css.input_stretch]: stretch })}
      placeholder="Начните писать..."
      {...props}
    />
  );
};
