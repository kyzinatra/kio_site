import css from './splash-screen.module.css';
import {FC, PropsWithChildren} from 'react';
import {Link} from "../../components/ui-kit/link/link.component";
import {Loader} from "../../components/ui-kit/loader/loader.component";
import {ILoader} from "../../components/ui-kit/loader/loader";
import {ROUTES} from "../../constants/routes";
export const SplashScreen: FC<ILoader> = ({theme, percent}) => {

    return (
        <main className={css.page}>
            <Loader theme={theme} percent={percent}/>
            <div className={css.pageText}>
                <span>Загрузка страницы...</span>
                <span className={css.pageText__contact}>Если загрузка идет слишком долго
                    <Link to={ROUTES.PAGE_404_ROUTE} className={css.pageText__link}>
                        напишите нам
                    </Link>
                </span>
            </div>
        </main>
    );
};