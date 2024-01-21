import { FC } from 'react';
import css from './user-input-billet.module.css';
import {IUserInputBillet} from './user-input-billet'
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';
import { Input } from '@components/ui-kit/input/input.components';

export const UserInputBillet: FC<IUserInputBillet> = ({ 
        title,
        subtitle,
        footerText,
        btnText
    }) => {
    return (
        <UserIninitalBillet title={title} subtitle={subtitle} footerText={footerText} btnText={btnText}>
            <div className={css['user-input-billet__main-info']}>
                <Input/>
            </div>
        </UserIninitalBillet>
    );
};