import { HeaderContent } from '../profile-content-header/header-content.component';
import css from './profile-tasks.module.css';

export const ProfileTasks = () => {
  return (
    <div className={css['profile-tasks__forms']}>
      <HeaderContent 
        title={"Задачи"}
        textHeader={`
          Тут отображаются незаконченные задачи, и те, которые можно начать. 
          Нажми на плитку, чтобы продолжить или начать.
        `}
      />
    </div>
  );
};
