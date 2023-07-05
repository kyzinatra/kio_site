import React, {FC, PropsWithChildren} from 'react';

import css from './spiner.module.css';
import {ISpiner} from "./spiner";

export const SpinerComponent: FC<ISpiner> = ({theme = 'default'}) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={`${css.lds_roller} ${css[`lds_roller_${theme}`]}`}>
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