<<<<<<< HEAD
import { FC, PropsWithChildren } from 'react';
||||||| 12a1aaf
import React, { FC, PropsWithChildren } from 'react';
=======
import React, { FC, PropsWithChildren, memo } from 'react';
>>>>>>> master

import css from './trace.module.css';
import { ITrace } from './trace';
import { clx } from '@utils/clx';

/**
 * @description Trace component for displaying traces on the page. Usign by Home page for KIO presentation
 */
export const Trace: FC<PropsWithChildren<ITrace>> = memo(({ children, theme }) => {
  return (
    <div className={css.trace}>
      <div className={clx(css.trace__circle, css[`trace__circle_${theme}`])} />
      <p className={clx(css.trace__text, css[`trace__text_${theme}`])}>{children}</p>
    </div>
  );
});
Trace.displayName = 'memo(Trace)';
