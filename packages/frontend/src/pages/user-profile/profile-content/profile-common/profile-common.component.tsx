import { UserAvatarBillet } from '@components/user-profile-billets/user-avatar-billet/user-avatar-billet.component';
import { UserInfoBillet } from '@components/user-profile-billets/user-info-billet/user-info-billet.component';
import { UserInputBillet } from '@components/user-profile-billets/user-input-billet/user-input-billet.component';
import { UserDeleteBillet } from '@components/user-profile-billets/user-delete-billet/user-delete-billet.component';
import css from './profile-common.module.css';

export const ProfileCommon = () => {
  return (
    <div className={css['profile-common__forms']}>
            <UserInputBillet
              title={'Ваше имя'}
              subtitle={'Это ваше имя, которое будет отображаться публично'}
              footerText={'Пожалуйста, используйте больше 32 символов'}
              btnText={'Кнопочка'}
            />
            <UserInputBillet
              title={'Ваш email адрес'}
              subtitle={'Это ваш email, с помощью которого вы входите в kio'}
              footerText={'Мы отрпавим письмо на эту почту для проверки'}
              btnText={'Кнопочка'}
            />
            <UserAvatarBillet 
              title={'Ваш аватар'}
              subtitle={'Это ваш аватар, который видят все.'}
              mainText={'Нажмите на картинку, чтобы сменить аватар.'}
              footerText={'Аватар необязательная часть, но крайне рекомендуемая'}
              img={'https://img.freepik.com/premium-photo/cosmic-abstract-dark-gray-background-fantastic-wallpaper_511585-2053.jpg'}
            />
            <UserInfoBillet 
              title={"Ваш уникальный ID"}
              subtitle={"Это ваш уникальный ID"}
              footerText={'Используется для верефикации пользователя'}
              textWithInfo={'kdjfsljskjdf'}
            />
            <UserInfoBillet 
              title={"Контактный номер"}
              subtitle={"Это ваш номер телефона"}
              footerText={'Мы отправим сообщение на телефон для проверки'}
              textWithInfo={'+7(905) 251-17-07'}
            />
            <UserInfoBillet 
              title={"Ваш реферал"}
              subtitle={"Это уникальный номер вашего реферала. При оплата вы и ваш реферал получат 10% от суммы оплаты"}
              footerText={'Мы отправим сообщение на телефон для проверки'}
              textWithInfo={'+7(905) 251-17-07'}
            />
            <UserDeleteBillet
              title={'Удалить мой аккаунт'}
              btnText={'Удалить аккаунт'}
            />
    </div>
  );
};
