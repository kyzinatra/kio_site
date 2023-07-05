import React, {useState} from 'react';
import css from './errorInfo-errorNum.module.css';
export const ErrorInfoErrorNumComponent = ({...props}) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <p className={css.errorText}>{`Ошибка ${props.errorNum}`}</p>
            <p className={css.wentWrong}>Что-то пошло не так</p>
        </div>

    );
};