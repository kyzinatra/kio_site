import { FC } from 'react';
import css from './user-information-board.module.css';
import { IUserInformationBoard } from './user-information-board';
import { UserIninitalInformationBoard } from '../user-initial-information-board/user-initial-information-board.component';

export const UserInformationBoard: FC<IUserInformationBoard> = ({ title, iconSrc, statusIcon }) => {
  return (
    <UserIninitalInformationBoard title={title} iconSrc={iconSrc}>
      <img className={css[`information-board__icon`]} src={statusIcon} />
    </UserIninitalInformationBoard>
  );
};
