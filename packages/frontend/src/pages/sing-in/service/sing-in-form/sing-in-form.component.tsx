import React, { FormEvent } from 'react';

import { ROUTES } from '../../../../constants/routes';

import { Input } from '../../../../components/ui-kit/input/input.components';
import { Button } from '../../../../components/ui-kit/button/button.component';
import { Link } from '../../../../components/ui-kit/link/link.component';

import { useForm } from '../../../../hooks/use-form';
import { useSingInMutation } from '../../../../api';

import css from './sing-in-form.module.css';

type TSingInForm = {
  email: string;
  password: string;
};

const initialForm = { email: '', password: '' };

export const SingInForm = () => {
  const { form } = useForm<TSingInForm>(initialForm);

  const mutationQuery = useSingInMutation();

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutationQuery.mutate({
      email: form.email?.value || '',
      password: form.password?.value || ''
    });
  }

  return (
    <form className={css.form} onSubmit={submitFormHandler}>
      <div className={css.form__controls}>
        <Input placeholder="Электронная почта" type="email" required {...form.email} />
        <Input placeholder="Пароль" type="password" required {...form.password} />
        <Button type="submit" theme="accent" disabled={mutationQuery.isLoading}>
          Отправить
        </Button>
      </div>
      <div className={css.form__nav}>
        <Link to={ROUTES.FORGOT_PASSWORD_ROUTE} underline>
          Забыл Пароль
        </Link>
        <Link to={ROUTES.SING_UP_ROUTE} underline>
          У меня еще нет аккаунта
        </Link>
      </div>
    </form>
  );
};
