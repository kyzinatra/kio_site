import css from './profile-header.module.css';

export const ProfileHeader = () => {
  return (
    <div className={css['profile-header__container']}>
        <h1 className={css['profile-header__text']}>Ваш личный аккаунт</h1>
    </div>
  );
};
