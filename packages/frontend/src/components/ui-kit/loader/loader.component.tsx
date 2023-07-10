import {FC} from 'react';
import { clx } from '../../../utils/clx';

import css from './loader.module.css';
import {ILoader} from "./loader";

export const Loader: FC<ILoader> = ({theme = 'default', percent = 0}) => {
    if(percent > 100){
        percent = 100;
    }
    const test = clx(css[`loader`], css[`loader__hidden`], true);
    return (
        <div className={css.loader}>
            <div className={`${css.loader} ${css[`loader__gradient__${theme}`]}`}></div>
            <div style={{
                left: percent + "%",
                width: 100 - percent + "%",
            }} className={test}></div>
        </div>
    );
};
