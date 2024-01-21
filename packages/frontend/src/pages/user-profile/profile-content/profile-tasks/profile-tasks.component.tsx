import { ProfileContentHeader } from '../profile-content-header/profile-content-header.component';
import css from './profile-tasks.module.css';

export const ProfileTasks = () => {
  return (
    <div className={css['profile-tasks__forms']}>
      <ProfileContentHeader 
        title={"Задачи"}
        textHeader={`
          Тут отображаются незаконченные задачи, и те, которые можно начать. 
          Нажми на плитку, чтобы продолжить или начать.
        `}
      />
    </div>
  );
};
