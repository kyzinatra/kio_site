import { UserInformationBoard  } from '@components/ui-kit/user-profile-information-board/user-data-information-board/user-information-board.component';
import css from './profile-notifications.module.css';

export const ProfileNotifications = () => {
  return (
    <div>
      <div className={css['profile-notifications__information-board-container']}>
        <UserInformationBoard  
          title={"#### #### #### 3517"} 
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"} 
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
        <UserInformationBoard  
          title={"#### #### #### 2200"} 
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"} 
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
      </div>
      <hr />
      <div className={css['profile-notifications__information-board-container']}>
        <UserInformationBoard  
          title={"#### #### #### 3517"} 
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"} 
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
        <UserInformationBoard  
          title={"#### #### #### 2200"} 
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"} 
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
      </div>
    </div>
  );
};