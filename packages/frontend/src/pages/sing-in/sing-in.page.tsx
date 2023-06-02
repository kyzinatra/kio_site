import React from 'react';
import { Layout } from '../../components/layout/layout.component';
import { SingInForm } from './service/sing-in-form/sing-in-form.component';
import { NETWORK_IMAGES } from './service/constants';

import css from './sing-in.module.css';

export const SingIn = () => {
  return (
    <Layout protectedFrom="authorized" withHelp>
      <main className={css['sing-in']}>
        <h1 className={css['sing-in__title']}>Войти через социальные сети</h1>
        <ul className={css['sing-in__networks']}>
          {NETWORK_IMAGES.map((el, i) => (
            <li key={i}>
              <img src={`/networks/${el}-logo.png`} alt={el} />
            </li>
          ))}
        </ul>
        <h2 className={css['sing-in__sub-title']}>Или через личный аккаунт</h2>
        <SingInForm />
      </main>
    </Layout>
  );
};
