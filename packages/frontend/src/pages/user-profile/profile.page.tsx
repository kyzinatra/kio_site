import css from './profile.module.css';
import { FC } from 'react';
import { IUserProfile } from './profile';
import { VerticalNavbar } from '@components/ui-kit/vertical-navbar/vertical-navbar.component';
import { Layout } from '@components/layout/layout.component';
import { ProfileHeader } from './profile-header/profile-header.component';
import { ProfileRoutes } from './profile-routes/profile-routes.component';
import { items, routes } from './profile.utils';

export const UserProfile: FC<IUserProfile> = ({ theme }) => {
  return (
      <div className={css.page}>
        <Layout withNav/>
        <ProfileHeader/>
        <div className={css['user-profile__container']}>
          <VerticalNavbar
              items={items} 
              routes={routes}
          />
          <ProfileRoutes/>
        </div>
      </div>
  );
};
