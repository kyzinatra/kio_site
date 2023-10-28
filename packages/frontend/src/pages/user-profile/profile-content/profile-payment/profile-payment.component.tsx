import { UserOfferBillet } from '@components/user-profile-billets/user-offer-billet/user-offer-billet.component';
import { ProfileContentHeader } from '../profile-content-header/profile-content-header.component';
import css from './profile-payment.module.css';
import { UserDataInformationBoard } from '@components/ui-kit/user-profile-information-board/user-data-information-board/user-data-information-board.component';

export const ProfilePayment = () => {
  return (
    <div className={css['profile-payment__forms']}>
      <ProfileContentHeader 
        title={"Оплата"}
        textHeader={`
          Свяжите свой Личный кабинет с KIO со стторонним сервисом, 
          чтобы использовать его для оплаты.
        `}
      />
      <UserOfferBillet 
        title={"Метод оплаты"} 
        subtitle={"Добавьте новый метод оплаты с помощью карты или онлайн-кошелька"} 
        footerText={"Можно добавить не более трех кредитных, дебетовых или предоплаченных карт."} 
        btnText={"Добавить"}
      />
      <div className={css['profile-payment__information-board-container']}>
        <UserDataInformationBoard 
          title={"#### #### #### 3517"} 
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"} 
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
        <UserDataInformationBoard 
          title={"#### #### #### 2200"} 
          iconSrc={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"} 
          statusIcon={"https://img.freepik.com/premium-photo/grey-background-texture_196038-5627.jpg"}
        />
      </div>
    </div>
  );
};
