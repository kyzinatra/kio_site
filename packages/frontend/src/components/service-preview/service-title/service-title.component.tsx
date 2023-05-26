import React from 'react';
import { Button } from '../../ui-kit/button/button.component';

import css from './service-title.module.css';

export const ServiceTitle = () => {
  return (
    <section className={css.title}>
      <div className={css.title__text}>
        <span className={css['title__text-1']} style={{ '--content': "'Конструируй.'" } as object}>
          <span className={css['title__text-content1']}>Конструируй.</span>
        </span>
        <span className={css['title__text-2']} style={{ '--content': "'Исследуй.'" } as object}>
          <span className={css['title__text-content2']}>Исследуй.</span>
        </span>
        <span className={css['title__text-3']} style={{ '--content': "'Оптимизируй.'" } as object}>
          <span className={css['title__text-content3']}>Оптимизируй.</span>
        </span>
      </div>
      <p className={css.title__description}>
        КИО — это конкурс, который позволяет вам раскрыть ваши таланты, попробовать множество интересных задач
        и соревноваться с друзьями
      </p>
      <Button className={css.title__start} size="xxlong" theme="colored-blue">
        Начать
      </Button>
      <div className={css.title__contributors}>
        <p>Создано при поддержке</p>
        <img src="/ETU.png" alt="СПбГЭТУ ЛЭТИ" width="380" height="74" />
      </div>
    </section>
  );
};
