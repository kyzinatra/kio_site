import css from './profile-integrations.module.css';
import { HeaderContent } from '../../profile-content-header/header-content.component';
import { UserSocialMediaBillet } from '@components/user-profile-billets/user-social-media-billet/user-social-media-billet.component';

export const ProfileIntegrations = () => {
  return (
    <div className={css['profile-integrations__information-board-container']}>
      <HeaderContent
        title={'Интеграции'}
        textHeader={'Вставьте html код на ваш сайт или поделитесь КИО в социальных сетях'}
      />
      <UserSocialMediaBillet
        title={'Добавьте новые социальные сети'}
        footerText={'За каждого приведенного участника с вашей ссылки мы оплатим 10% от стоимости конкурса.'}
      />
    </div>
  );
};
