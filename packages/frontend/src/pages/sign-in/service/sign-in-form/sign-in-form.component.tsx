import { FormEvent } from 'react';

import { ROUTES } from '@constants/routes';

import { Input } from '@components/ui-kit/input/input.components';
import { Button } from '@components/ui-kit/button/button.component';
import { Link } from '@components/ui-kit/link/link.component';

import { useForm } from '@hooks/use-form';
import { useToast } from '@hooks/use-toast';
import { useModified } from '@hooks/use-modified';

import css from './sign-in-form.module.css';
import { ISignInDto } from 'src/api/api';

import { useSignInMutation } from '@api/index';

const initialForm: ISignInDto = { email: '', password: '' };

export const SignInForm = () => {
  const { form } = useForm(initialForm);
  const [isModified, setModified, onModified] = useModified();

  const { mutate, isError, isLoading } = useSignInMutation();

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setModified(false);
    mutate({
      email: form.email?.value || '',
      password: form.password?.value || ''
    });
  }

  return (
    <form className={css.form} onSubmit={submitFormHandler}>
      <div className={css.form__controls}>
        <Input
          placeholder="Почта"
          type="email"
          isError={isError && !isModified}
          disabled={isLoading}
          autoComplete="email"
          required
          {...form.email}
          {...onModified}
        />
        <Input
          placeholder="Пароль"
          type="password"
          isError={isError && !isModified}
          disabled={isLoading}
          autoComplete="current-password"
          required
          {...form.password}
          {...onModified}
        />
        <Button type="submit" theme="accent" disabled={isLoading}>
          Отправить
        </Button>
      </div>
      <div className={css.form__nav}>
        <Link to={ROUTES.FORGOT_PASSWORD_ROUTE} underline>
          Забыл Пароль
        </Link>
        <Link to={ROUTES.SIGN_UP_ROUTE} underline>
          У меня еще нет аккаунта
        </Link>
      </div>
    </form>
  );
};
