import { FC } from 'react';
import css from './user-avatar-billet.module.css';
import { IUserAvatarBillet } from './user-avatar-billet';
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';

export const UserAvatarBillet: FC<IUserAvatarBillet> = ({ 
        title,
        subtitle,
        footerText,
        img,
        mainText
    }) => {
  return (
        <UserIninitalBillet title={title} subtitle={subtitle} footerText={footerText}>
            <div className={css['user-avatar-billet__main-info']}>
                <span className={css['user-avatar-billet__info-text']}>{mainText}</span>
            </div>
            <div className={css['user-avatar-billet__img-container']}>
                <img className={css['user-avatar-billet__img']} src={`${img}`} alt="Иконка" />
            </div>
        </UserIninitalBillet>
  );
};