import { FC } from 'react';
import { Header } from '../../components/header/header.component';
import { ServicePreview } from './service/service-preview.component';

export const Home: FC = () => {
  return (
    <>
      <Header withNav />
      <ServicePreview />
    </>
  );
};
