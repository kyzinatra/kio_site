import { UserSocialMediaInformationBoard } from '@components/ui-kit/user-profile-information-board/user-social-media-information-board/user-social-media-information-board.component';
import css from './profile-social-media.module.css';
import { UserSocialMediaBillet } from '@components/user-profile-billets/user-social-media-billet/user-social-media-billet.component';
import { ProfileContentHeader } from '../profile-content-header/profile-content-header.component';

export const ProfileSocialMedia = () => {
  return (
    <div className={css['profile-social-media__forms']}>
      <ProfileContentHeader 
        title={"Социальные сети"}
        textHeader={`
          Свяжите свой Личный кабинет на KIO со сторонним сервисом, 
          чтобы исопльзовать его для входа. 
          Для каждой сторонней службы можно добавить одно соединение для входа.
        `}
      />
      <UserSocialMediaBillet title={'Добавьте новые социальные сети'}/>
      <div className={css[`profile-social-media__information-board-container`]}>
        <UserSocialMediaInformationBoard 
          title={"Github"} 
          subtitle={"@kuzinatra"}
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
        <UserSocialMediaInformationBoard 
          title={"Github"} 
          subtitle={"@kuzinatra"}
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
        <UserSocialMediaInformationBoard 
          title={"Github"} 
          subtitle={"@kuzinatra"}
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
      </div>
    </div>
  );
};
