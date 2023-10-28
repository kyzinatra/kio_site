import { FC } from 'react';
import css from './profile-content-header.module.css';
import { IProfileContentHeader } from './profile-content-header';

export const ProfileContentHeader: FC<IProfileContentHeader> = ({ 
    title,
    textHeader
}) => {
  return (
    <div className={css[`profile-content-header_container`]}>
        <p className={css[`profile-content-header_title`]}>{title}</p>
        <p className={css[`profile-content-header_text-header`]}>
            {textHeader}
        </p>
    </div>
  );
};
