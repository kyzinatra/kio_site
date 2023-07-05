import React from 'react';
import css from './splash-screen.module.css';
import {Link} from "../../components/ui-kit/link/link.component";
import {Loader} from "../../components/ui-kit/loader/loader.component";
import {ROUTES} from "../../constants/routes";
export const SplashScreenPage = ({themeLoader = "default",...props}) => {

    return (
        <main className={css.page}>
            <Loader theme={themeLoader} percent={props.percent}/>
            <div className={css.pageText}>
                <span>Загрузка страницы...</span>
                <span className={css.writeUs}>Если загрузка идет слишком долго
                    <Link to={ROUTES.PAGE_404_ROUTE}>
                        <span className={css.a}>напишите нам</span>
                    </Link>
                </span>
            </div>
        </main>
    );
};