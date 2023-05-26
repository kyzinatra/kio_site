import React from 'react';
import css from './service-preview.module.css';
import { ServiceTitle } from './service-title/service-title.component';

export const ServicePreview = () => {
  return (
    <main className={css.preview}>
      <ServiceTitle />
    </main>
  );
};
