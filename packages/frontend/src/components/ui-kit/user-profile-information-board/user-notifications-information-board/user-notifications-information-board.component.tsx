import { FC } from 'react';
import css from './user-notifications-information-board.module.css';
import { IUserNotificationsInformationBoard } from './user-notifications-information-board';
import { UserIninitalInformationBoard } from '../user-initial-information-board/user-initial-information-board.component';

export const UserNotificationsInformationBoard: FC<IUserNotificationsInformationBoard> = ({ 
        title,
        iconSrc,
        statusIcon
    }) => {
  return (
    <div>
        <UserIninitalInformationBoard title={title} iconSrc={iconSrc}>
            <img className={css[`notifications-information-board__icon`]} src={`${statusIcon}`} alt="" />
        </UserIninitalInformationBoard>
    </div>
  );
};