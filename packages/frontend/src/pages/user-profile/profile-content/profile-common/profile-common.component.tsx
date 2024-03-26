import { UserAvatarBillet } from '@components/user-profile-billets/user-avatar-billet/user-avatar-billet.component';
import { UserInfoBillet } from '@components/user-profile-billets/user-info-billet/user-info-billet.component';
import { UserInputBillet } from '@components/user-profile-billets/user-input-billet/user-input-billet.component';
import { UserDeleteBillet } from '@components/user-profile-billets/user-delete-billet/user-delete-billet.component';
import css from './profile-common.module.css';
import { useMeRequest } from '@api/routes/me';
import { BASE_URL } from '@api/constants/base';

export const ProfileCommon = () => {
  const { data } = useMeRequest();

  return (
    <div className={css['profile-common__forms']}>
      <UserInputBillet
        title={'Ваше имя'}
        subtitle={'Это ваше имя, которое будет отображаться публично'}
        footerText={'Пожалуйста, используйте не больше 32 символов'}
        btnText={'Сохранить'}
        value={data?.name}
        validate={data => (data?.length < 2 ? 'Имя должно быть больше 1 символа' : true)}
        onSave={data => console.log('onSave', data)}
      />
      <UserInputBillet
        title={'Ваш email адрес'}
        subtitle={'Это ваш email, с помощью которого вы входите в kio'}
        footerText={'Мы отправим письмо на эту почту для проверки'}
        btnText={'Сохранить'}
        value={data?.email}
        onSave={data => console.log('onSave', data)}
      />
      <UserAvatarBillet
        title={'Ваш аватар'}
        subtitle={'Это ваш аватар, который видят все'}
        mainText={'Нажмите на картинку, чтобы сменить аватар'}
        footerText={'Аватар - необязательная часть'}
        img={BASE_URL + '/' + data?.avatarUrl}
      />
      <UserInfoBillet
        title={'Ваш уникальный ID'}
        subtitle={'Это ваш уникальный ID'}
        footerText={'Используется для верификации пользователя'}
        textWithInfo={data?.id}
      />
      <UserDeleteBillet title={'Удалить мой аккаунт'} btnText={'Удалить аккаунт'} />
    </div>
  );
};
