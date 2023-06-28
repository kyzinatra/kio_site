import { FC } from 'react';
import { ServicePreview } from './service/service-preview.component';
import { Layout } from '@components/layout/layout.component';

export const Home: FC = () => {
  return (
    <Layout withNav withFooter>
      <ServicePreview />
    </Layout>
  );
};
