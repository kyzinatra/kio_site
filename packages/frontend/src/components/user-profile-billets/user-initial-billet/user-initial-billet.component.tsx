import { PropsWithChildren, FC } from 'react';
import css from './user-initial-billet.module.css';
import { IUserInitialBillet } from './user-initial-billet';
import { Button } from '@components/ui-kit/button/button.component';
import { clx } from '@utils/clx';

export const UserIninitalBillet: FC<PropsWithChildren<IUserInitialBillet>> = ({ 
        title,
        subtitle,
        footerText,
        btnText,
        children,
        theme='default',
        btnTheme='accent'
    }) => {
  return (
    <div className={clx(css[`user-initial-billet__container`], css[`user-initial-billet__container--${theme}`])}>
        <header className={css['user-initial-billet__header']}>
            <h3 className={css['user-initial-billet__header--h3']}>{title}</h3>
            {
                subtitle &&
                <h5 className={css['user-initial-billet__header--h5']}>{subtitle}</h5>
            }
        </header>
        <main className={css['user-initial-billet__main']}>
            {children}
        </main>
        <footer className={css['user-initial-billet__footer']}>
            <div>
                {
                    footerText &&
                    <span className={css['user-initial-billet__footer-text']}>{footerText}</span>
                }
            </div>
            {
                btnText && <Button theme={btnTheme}>{btnText}</Button>
            }
        </footer>
    </div>
  );
};