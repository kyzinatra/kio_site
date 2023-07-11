import { FC, PropsWithChildren, useState, ChangeEvent } from 'react';
import { IRadio } from './radio';

import css from './radio.module.css';
import { clx } from '@utils/clx';

export const Radio: FC<PropsWithChildren<IRadio>> = ({
  checked = false,
  children,
  title,
  name,
  value,
  onChange
}) => {
  // TODO as soon as possible replace by :has() selector in css (ебаный firefox)
  return (
    <label className={clx(css.radio, { [css.radio__select]: checked })}>
      <div className={css.radio__content}>
        <h2 className={css.radio__title}>{title}</h2>
        <p className={css.radio__description}>{children}</p>
      </div>
      <input
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
        name={name}
        className={css.radio__input}
      />
    </label>
  );
};
