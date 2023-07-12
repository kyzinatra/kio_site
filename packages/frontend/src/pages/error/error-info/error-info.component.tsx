import { FC } from 'react';
import { ErrorInfoErrorNumComponent } from './error-info-status/error-info-status.component';
import { ErrorInfoErrorTextComponent } from './error-info-title/error-info-titile.component';

export const ErrorInfo: FC<IErrorInfo> = ({ errorNum = 404, ...props }) => {
  return (
    <div>
      <ErrorInfoErrorNumComponent errorNum={errorNum} />
      <ErrorInfoErrorTextComponent errorText={props.errorText} />
    </div>
  );
};
