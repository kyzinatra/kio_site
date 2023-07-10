import {FC} from 'react';

import css from './spinner.module.css';
import {ISpinner} from "./spinner";
import { clx } from '../../../utils/clx';

export const SpinnerComponent: FC<ISpinner> = ({theme = 'default'}) => {

  const ldsRollerTheme = clx(css[`lds__roller`], css[`lds__roller--${theme}`]);

    return (
        <div className={ldsRollerTheme}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};