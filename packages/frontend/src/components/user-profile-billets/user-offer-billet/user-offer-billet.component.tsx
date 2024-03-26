import { FC } from 'react';
import { IUserOfferBillet } from './user-offer-billet';
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';

export const UserOfferBillet: FC<IUserOfferBillet> = ({ 
        title,
        subtitle,
        footerText,
        btnText,
    }) => {
  return (
    <UserIninitalBillet title={title} subtitle={subtitle} footerText={footerText} btnText={btnText}/>
  );
};