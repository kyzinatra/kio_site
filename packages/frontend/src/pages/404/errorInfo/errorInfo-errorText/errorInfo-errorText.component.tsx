import React, {useState} from 'react';
import css from './errorInfo-errorText.module.css';
import {Link} from "../../../../components/ui-kit/link/link.component";
import {ROUTES} from "../../../../constants/routes";
export const ErrorInfoErrorTextComponent = ({...props}) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <p className={css.pageNotFoundText}>{props.errorText}
            <Link to={ROUTES.DEFAULT_ROUTE}>
                <span className={css.a}>Домой</span>
            </Link>
        </p>
    );
};