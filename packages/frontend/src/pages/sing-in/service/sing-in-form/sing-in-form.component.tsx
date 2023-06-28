import React, { FormEvent, useMemo, useState } from 'react';

import { ROUTES } from '../../../../constants/routes';

import { Input } from '@components/ui-kit/input/input.components';
import { Button } from '@components/ui-kit/button/button.component';
import { Link } from '@components/ui-kit/link/link.component';

import { useSingInMutation } from '@api/';

import css from './sing-in-form.module.css';
import { useForm } from '@hooks/use-form';
import { useToast } from '@hooks/use-toast';
import { useModified } from '@hooks/use-modified';

type TSingInForm = {
  email: string;
  password: string;
};

const initialForm = { email: '', password: '' };

export const SingInForm = () => {
  const { form } = useForm<TSingInForm>(initialForm);
  const tost = useToast();
  const [isModified, setModified, onModified] = useModified();

  const { mutate, isError, isLoading } = useSingInMutation();

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setModified(false);
    mutate(
      {
        email: form.email?.value || '',
        password: form.password?.value || ''
      },
      {
        onError(error) {
          tost.push({ title: error.message, theme: 'error' });
        }
      }
    );
  }

  return (
    <form className={css.form} onSubmit={submitFormHandler}>
      <div className={css.form__controls}>
        <Input
          placeholder="Почта"
          type="email"
          isError={isError && !isModified}
          disabled={isLoading}
          required
          {...form.email}
          {...onModified}
        />
        <Input
          placeholder="Пароль"
          type="password"
          isError={isError && !isModified}
          disabled={isLoading}
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
        <Link to={ROUTES.SING_UP_ROUTE} underline>
          У меня еще нет аккаунта
        </Link>
      </div>
    </form>
  );
};
