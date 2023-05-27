import React, { FC } from 'react';
import { Button } from '../../../../components/ui-kit/button/button.component';

import css from './service-title.module.css';
import { IServiceTitle } from './service-title';
import { clx } from '../../../../utils/clx';

const title = ['Конструируй.', 'Исследуй.', 'Оптимизируй.'];

export const ServiceTitle: FC<IServiceTitle> = ({ scrollIntoStart }) => {
  return (
    <section className={css.title}>
      <div className={css['title__text-wrapper']}>
        {title.map((el, i) => (
          <span
            className={clx(css.title__text, css['title__text-' + (i + 1)])}
            style={{ '--content': `'${el}'` } as object}
          >
            <span className={clx(css['title__text-content'], css['title__text-content-' + (i + 1)])}>
              {el}
            </span>
          </span>
        ))}
      </div>
      <p className={css.title__description}>
        КИО — это конкурс, который позволяет вам раскрыть ваши таланты, попробовать множество интересных задач
        и соревноваться с друзьями
      </p>
      <Button className={css.title__start} onClick={scrollIntoStart} size="xxlong" theme="default">
        Начать
      </Button>
      <div className={css.title__contributors}>
        <p>Создано при поддержке</p>
        <img src="/ETU.png" alt="СПбГЭТУ ЛЭТИ" width="380" height="74" />
      </div>
    </section>
  );
};
