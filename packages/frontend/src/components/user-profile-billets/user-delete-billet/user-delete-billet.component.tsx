import { FC } from 'react';
import css from './user-delete-billet.module.css';
import { IUserDeleteBillet } from './user-delete-billet';
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';

export const UserDeleteBillet: FC<IUserDeleteBillet> = ({ 
        title,
        btnText,
        onClick
    }) => {
  return (
    <UserIninitalBillet title={title} btnText={btnText} theme='red' btnTheme='colored-red'>
            <div className={css['user-delete-billet__main-info']}>
                <span className={css['user-delete-billet__text-about-delete-profile']}>
                    Навсегда удалить Личный аккаунт 
                    и все его содержимое с платформы КИО. 
                    Это действие необратимо, поэтому, 
                    пожалуйста, продолжайте с осторожностью. 
                </span>
            </div>
    </UserIninitalBillet>
  );
};