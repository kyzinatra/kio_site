import { FC } from 'react';
import css from './user-social-media-information-board.module.css';
import { IUserSocialMediaInformationBoard } from './user-social-media-information-board';
import { UserIninitalInformationBoard } from '../user-initial-information-board/user-initial-information-board.component';

export const UserSocialMediaInformationBoard: FC<IUserSocialMediaInformationBoard> = ({ 
        title,
        subtitle,
        iconSrc,
        statusIcon
    }) => {
  return (
    <div>
        <UserIninitalInformationBoard title={title} iconSrc={iconSrc}>
            <span className={css[`social-media-information-board__user-name`]} >{subtitle}</span>
            <img className={css[`social-media-information-board__icon`]} src={`${statusIcon}`} alt="" />
        </UserIninitalInformationBoard>
    </div>
  );
};