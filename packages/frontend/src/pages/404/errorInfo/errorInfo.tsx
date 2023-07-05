import React, {useState} from 'react';
import css from './404.module.css';
import {Link} from "../../components/ui-kit/link/link.component";
import {NAV_ROUTES} from "../../components/header/nav/routes";
import {ErrorInfoErrorNumComponent} from "./errorInfo-errorNum/errorInfo-errorNum.component";
import {ErrorInfoErrorTextComponent} from "./errorInfo-errorText/errorInfo-errorText.component";
export const ErrorInfo = ({errorNum = 404, ...props}) => {

    // @ts-ignore
    // @ts-ignore
    return (
            <div>
                <ErrorInfoErrorNumComponent errorNum={errorNum}/>
                <ErrorInfoErrorTextComponent errorText={props.errorText}/>
            </div>
    );
};