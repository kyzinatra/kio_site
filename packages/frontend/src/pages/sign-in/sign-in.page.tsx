import { Layout } from '@components/layout/layout.component';
import { SignInForm } from './service/sign-in-form/sign-in-form.component';

import css from './sign-in.module.css';
import UserConnections from '@components/user/user-connections/user-connections';

export const SignIn = () => {
  return (
    <Layout protectedFrom="authorized" withHelp>
      <main className={css['sign-in']}>
        <UserConnections>Войти через социальные сети</UserConnections>
        <h2 className={css['sign-in__sub-title']}>Или через личный аккаунт</h2>
        <SignInForm />
      </main>
    </Layout>
  );
};
