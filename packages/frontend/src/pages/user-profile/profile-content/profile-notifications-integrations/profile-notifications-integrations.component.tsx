import { HeaderContent } from '../profile-content-header/header-content.component';
import css from './profile-notifications-integrations.module.css';
import { ProfileNotifications } from './profile-notifications/profile-notifications.component';
import { ProfileIntegrations } from './profile-integrations/profile-integrations.component';

export const ProfileNotificationsIntegrations = () => {
  return (
    <div className={css['profile-notifications-integrations__forms']}>
      <HeaderContent 
        title={"Уведомления"}
        textHeader={`
          Подписывайтесь на наши новые мероприятия и акции, 
          а также получайте уведомления о действиях.
        `}
      />
      <ProfileNotifications/>
      <ProfileIntegrations/>
    </div>
  );
};
