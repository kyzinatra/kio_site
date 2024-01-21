import { FC } from 'react';
import css from './user-info-billet.module.css';
import { IUserInfoBillet } from './user-info-billet';
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';

export const UserInfoBillet: FC<IUserInfoBillet> = ({ 
        title,
        subtitle,
        footerText,
        textWithInfo
    }) => {
  return (
    <UserIninitalBillet title={title} subtitle={subtitle} footerText={footerText}>
            <div className={css['user-info-billet__main-info']}>
                <div className={css['user-info-billet__info-text']}>{textWithInfo}</div>
            </div>
    </UserIninitalBillet>
  );
};