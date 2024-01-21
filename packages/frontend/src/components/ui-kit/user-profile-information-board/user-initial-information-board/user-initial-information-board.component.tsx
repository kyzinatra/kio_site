import { FC, PropsWithChildren } from 'react';
import css from './user-initial-information-board.module.css';
import { IUserInitialInformationBoard } from './user-initial-information-board';

export const UserIninitalInformationBoard: FC<PropsWithChildren<IUserInitialInformationBoard>> = ({ 
        title,
        iconSrc,
        children
    }) => {
  return (
    <div className={css[`initial-information-board__container`]}>
        <div className={css[`initial-information-board__info`]}>
            <img className={css[`initial-information-board__icon`]} src={`${iconSrc}`} alt="" />
            <span>{title}</span>
        </div>
        <div className={css[`initial-information-board__info`]}>
            {children}
        </div>
    </div>
  );
};