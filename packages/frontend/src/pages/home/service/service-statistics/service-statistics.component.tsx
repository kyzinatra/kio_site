import React from 'react';

import css from './service-statistics.module.css';
import { STATISTICS_CONTENT } from './constants';

export const ServiceStatistics = () => {
  return (
    <section className={css.statistics}>
      {Object.entries(STATISTICS_CONTENT).map(([desc, title], i) => (
        <div className={css.statistics__item}>
          <h1 className={css.statistics__title}>{title}</h1>
          <p className={css.statistics__description}>{desc}</p>
        </div>
      ))}
    </section>
  );
};
