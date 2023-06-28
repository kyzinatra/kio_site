import { useRef } from 'react';
import css from './service-preview.module.css';

import { TServiceRefProps } from './service-presentation/service-presentation';
import { ServicePresentation } from './service-presentation/service-presentation.component';
import { ServiceStart } from './service-start/service-start.component';
import { ServiceStatistics } from './service-statistics/service-statistics.component';
import { ServiceTitle } from './service-title/service-title.component';

export const ServicePreview = () => {
  const startRef = useRef<TServiceRefProps>(null);

  function scrollIntoStartHandler() {
    startRef.current?.scrollIntoView();
  }

  return (
    <>
      <main className={css.preview}>
        <ServiceTitle scrollIntoStart={scrollIntoStartHandler} />
        <ServicePresentation ref={startRef} />
      </main>
      <ServiceStatistics />
      <ServiceStart />
    </>
  );
};
