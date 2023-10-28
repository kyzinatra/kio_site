import { FC } from 'react';
import css from './social-media-cell.module.css';
import {ISocialMediaCell} from './social-media-cell'

export const SocialMediaCell: FC<ISocialMediaCell> = ({ 
        title,
        imageSrc
    }) => {
    return (
        <div className={css[`social-media-cell__container`]}>
            <img className={css[`social-media-cell__image`]} src={`${imageSrc}`} alt="" />
            <p>{title}</p>
        </div>
    );
};