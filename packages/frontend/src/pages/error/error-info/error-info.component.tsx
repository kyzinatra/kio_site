import { FC } from 'react';
import { ErrorInfoStatusComponent } from './error-info-status/error-info-status.component';
import { ErrorInfoTitleComponent } from './error-info-title/error-info-titile.component';
import { IErrorInfo } from '@pages/error/error-info/error-info';

export const ErrorInfoComponent: FC<IErrorInfo> = ({ status = 404,  title}) => {
  return (
    <div>
      <ErrorInfoStatusComponent status={status} />
      <ErrorInfoTitleComponent title={title} />
    </div>
  );
};
