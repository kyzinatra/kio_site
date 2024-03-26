import { UserOfferBillet } from '@components/user-profile-billets/user-offer-billet/user-offer-billet.component';
import { HeaderContent } from '../profile-content-header/header-content.component';
import css from './profile-payment.module.css';
import { UserInformationBoard  } from '@components/ui-kit/user-profile-information-board/user-data-information-board/user-information-board.component';

export const ProfilePayment = () => {
  return (
    <div className={css['profile-payment__forms']}>
      <HeaderContent 
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
