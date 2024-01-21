import { ProfileContentHeader } from '../profile-content-header/profile-content-header.component';
import css from './profile-constructors.module.css';

export const ProfileConstructors = () => {
  return (
    <div className={css['profile-constructors__forms']}>
      <ProfileContentHeader 
        title={"Конструктор"}
        textHeader={`
          Тут отображаются конструкторы задач, и те, которые можно начать. 
          Нажми на плитку, чтобы продолжить или начать.
        `}
      />
    </div>
  );
};
