import css from './profile.module.css';
import { FC } from 'react';
import { IUserProfile } from './profile';
import { VerticalNavbar } from '@components/ui-kit/vertical-navbar/vertical-navbar.component';
import { Layout } from '@components/layout/layout.component';
import { ProfileHeader } from './profile-header/profile-header.component';
import { ProfileRoutes } from './profile-routes/profile-routes.component';

export const UserProfile: FC<IUserProfile> = ({ theme }) => {
  return (
      <div className={css.page}>
        <Layout withNav/>
        <ProfileHeader/>
        <div className={css['user-profile__container']}>
          <VerticalNavbar
              items={['Общие', 'Социальные сети', 'Оплата', 'Задачи', 'Конструкторы', 'Уведомления и интеграции']} 
              routes={['', 'socialMedia', 'payment', 'tasks', 'constructors', 'notificationsAndIntegrations']}
          />
          <ProfileRoutes/>
        </div>
      </div>
  );
};
