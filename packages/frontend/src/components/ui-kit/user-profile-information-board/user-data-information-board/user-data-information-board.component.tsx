import { FC } from 'react';
import css from './user-data-information-board.module.css';
import { IUserDataInformationBoard } from './user-data-information-board';
import { UserIninitalInformationBoard } from '../user-initial-information-board/user-initial-information-board.component';

export const UserDataInformationBoard: FC<IUserDataInformationBoard> = ({ 
        title,
        iconSrc,
        statusIcon
    }) => {
  return (
    <div>
        <UserIninitalInformationBoard title={title} iconSrc={iconSrc}>
            <img className={css[`data-information-board__icon`]} src={`${statusIcon}`} alt="" />
        </UserIninitalInformationBoard>
    </div>
  );
};