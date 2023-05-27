import React, { useRef } from 'react';
import css from './service-preview.module.css';
import { ServiceTitle } from './service-title/service-title.component';
import { ServiceStart } from './service-start/service-start.component';

import { TServiceRefProps } from './service-start/service-start';

export const ServicePreview = () => {
  const startRef = useRef<TServiceRefProps>(null);

  function scrollIntoStartHandler() {
    startRef.current?.scrollIntoView();
  }

  return (
    <main className={css.preview}>
      <ServiceTitle scrollIntoStart={scrollIntoStartHandler} />
      <ServiceStart ref={startRef} />
    </main>
  );
};
