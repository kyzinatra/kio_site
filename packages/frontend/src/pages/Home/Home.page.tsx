import { FC } from 'react';
import { Header } from '../../components/header/header.component';
import { ServicePreview } from '../../components/service-preview/service-preview.component';

export const Home: FC = () => {
  return (
    <>
      <Header withNav />
      <ServicePreview />
    </>
  );
};
