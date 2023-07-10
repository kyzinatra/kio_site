import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import css from './404.module.css';
import { SplashScreen} from '../splash-screen/splash-screen.page';
import {EngTextComponent} from "./engText/engText.component";
import {ErrorInfo} from "./errorInfo/errorInfo";
export const Page404 = ({errorText = "Такой страницы не существует."}) => {
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) return <h1 className={css.page}>{'Это какая-то странная ошибка. :('}</h1>;

  // @ts-ignore
    // @ts-ignore
    return (
      <main className={css.page}>
        <SplashScreen theme='blueToСyan' percent={12}/>
        {/* <ErrorInfo errorNum={error.status} errorText={errorText}/>
        <EngTextComponent/> */}
      </main>
  );
};