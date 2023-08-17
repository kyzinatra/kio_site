import { FC } from 'react';
import css from './error-info-status.module.css';
import { IErrorInfoStatus } from '@pages/error/error-info/error-info-status/error-info-status';

export const ErrorInfoStatus: FC<IErrorInfoStatus> = ({ status }) => {
  return (
    <div>
      <p className={css.errorInfo__errorStatus}>{`Ошибка ${status}`}</p>
      <p className={css.errorInfo__explanation}>Что-то пошло не так</p>
    </div>
  );
};
