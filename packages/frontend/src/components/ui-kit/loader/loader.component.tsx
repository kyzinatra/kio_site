import { FC } from 'react';
import { clx } from '../../../utils/clx';

import css from './loader.module.css';
import { ILoader } from './loader';

export const Loader: FC<ILoader> = ({ theme = 'default', className }) => {

  const loaderHidden = clx(css[`loader`], css[`loader__hidden`]);
  const loaderGradientTheme = clx(css[`loader`], css[`loader__gradient--${theme}`]);

  return (
    <div className={clx(css.loader, className)}>
      <div className={loaderGradientTheme}></div>
      <div className={loaderHidden}></div>
    </div>
  );
};
