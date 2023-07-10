import {FC} from 'react';
import { clx } from '../../../utils/clx';

import css from './loader.module.css';
import {ILoader} from "./loader";

export const Loader: FC<ILoader> = ({theme = 'default', percent = 0}) => {
    if(percent > 100){
        percent = 100;
    }

    const loaderHidden = clx(css[`loader`], css[`loader__hidden`]);
    const loaderGradientTheme = clx(css[`loader`], css[`loader__gradient--${theme}`]);

    return (
        <div className={css.loader}>
            <div className={loaderGradientTheme}></div>
            <div style={{
                left: percent + "%",
                width: 100 - percent + "%",
            }} className={loaderHidden}></div>
        </div>
    );
};
