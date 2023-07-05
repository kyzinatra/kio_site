import React, {FC} from 'react';

import css from './loader.module.css';
import {ILoader} from "./loader";

export const Loader: FC<ILoader> = ({theme = 'default', ...props}) => {
    if(props.percent > 100){
        props.percent = 100;
    }else if(props.percent < 0){
        props.percent = 0;
    }
    return (
        <div className={css.loader}>
            <div className={`${css.loader} ${css[`loader__gradient__${theme}`]}`}></div>
            <div style={{
                left: props.percent + "%",
                width: 100 - props.percent + "%",
            }} className={`${css.loader} ${css.loader__hidden}`}></div>
        </div>
    );
};
