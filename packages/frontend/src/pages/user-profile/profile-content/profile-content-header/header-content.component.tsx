import { FC } from 'react';
import css from './header-content.module.css';
import { IHeaderContent } from './header-content';

export const HeaderContent: FC<IHeaderContent> = ({ 
    title,
    textHeader
}) => {
  return (
    <div className={css[`header-content_container`]}>
        <p className={css[`header-content_title`]}>{title}</p>
        <p className={css[`header-content_text-header`]}>
            {textHeader}
        </p>
    </div>
  );
};
