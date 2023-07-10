import {ErrorInfoErrorNumComponent} from "./errorInfo-errorNum/errorInfo-errorNum.component";
import {ErrorInfoErrorTextComponent} from "./errorInfo-errorText/errorInfo-errorText.component";
import { FC } from 'react';
export const ErrorInfo: FC<IErrorInfo> = ({errorNum = 404, ...props}) => {

    return (
            <div>
                <ErrorInfoErrorNumComponent errorNum={errorNum}/>
                <ErrorInfoErrorTextComponent errorText={props.errorText}/>
            </div>
    );
};