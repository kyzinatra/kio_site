import { FC } from 'react';
import css from './user-social-media-billet.module.css';
import {IUserSocialMediaBillet} from './user-social-media-billet'
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';
import { SocialMediaCell } from './social-media-cell/social-media-cell.component';

export const UserSocialMediaBillet: FC<IUserSocialMediaBillet> = ({ 
        title,
        footerText
    }) => {
    return (
        <UserIninitalBillet title={title} footerText={footerText}>
            <div className={css[`user-social-media__container`]}>
                <SocialMediaCell 
                    title={'GitHub'} 
                    imageSrc={'https://img.freepik.com/premium-photo/cosmic-abstract-dark-gray-background-fantastic-wallpaper_511585-2053.jpg'}
                />
                <SocialMediaCell 
                    title={'GitHub'} 
                    imageSrc={'https://img.freepik.com/premium-photo/cosmic-abstract-dark-gray-background-fantastic-wallpaper_511585-2053.jpg'}
                />
                <SocialMediaCell 
                    title={'GitHub'} 
                    imageSrc={'https://img.freepik.com/premium-photo/cosmic-abstract-dark-gray-background-fantastic-wallpaper_511585-2053.jpg'}
                />
            </div>
        </UserIninitalBillet>
    );
};