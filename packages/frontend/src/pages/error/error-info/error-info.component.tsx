import { FC } from 'react';
import { ErrorInfoStatus } from './error-info-status/error-info-status.component';
import { ErrorInfoTitle } from './error-info-title/error-info-title.component';
import { IErrorInfo } from '@pages/error/error-info/error-info';

export const ErrorInfo: FC<IErrorInfo> = ({ status = 404, title }) => {
  return (
    <div>
      <ErrorInfoStatus status={status} />
      <ErrorInfoTitle title={title} />
    </div>
  );
};
