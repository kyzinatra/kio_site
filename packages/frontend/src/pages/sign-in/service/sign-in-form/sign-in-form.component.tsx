import { FormEvent } from 'react';

import { ROUTES } from '@constants/routes';

import { Button } from '@components/ui-kit/button/button.component';
import { Link } from '@components/ui-kit/link/link.component';

import { useForm } from '@hooks/use-form';
import { useToast } from '@hooks/use-toast';
import { useModified } from '@hooks/use-modified';

import css from './sign-in-form.module.css';
import { ISignInDto } from 'src/api/api';

import { useSignInMutation } from '@api/index';
import { Form } from 'react-final-form';
import { InputFormField } from '@components/form/input-form-field/input-form-field.component';

const initialForm: ISignInDto = { email: '', password: '' };

export const SignInForm = () => {
  const { mutate, isError, isLoading } = useSignInMutation();

  const handleOnSubmit = (values: ISignInDto) => {
    mutate({
      email: values.email || '',
      password: values.password || ''
    });
  };

  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={initialForm}
      render={({ handleSubmit, dirtySinceLastSubmit }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.form__controls}>
            <InputFormField
              placeholder="Почта"
              type="email"
              name="email"
              isError={isError && !dirtySinceLastSubmit}
              disabled={isLoading}
              autoComplete="email"
              required
            />
            <InputFormField
              placeholder="Пароль"
              name="password"
              type="password"
              isError={isError && !dirtySinceLastSubmit}
              disabled={isLoading}
              autoComplete="current-password"
              required
            />
            <Button type="submit" theme="accent" disabled={isLoading}>
              Отправить
            </Button>
          </div>
          <div className={css.form__nav}>
            <Link to={ROUTES.FORGOT_PASSWORD_ROUTE} theme="underline">
              Забыл Пароль
            </Link>
            <Link to={ROUTES.SIGN_UP_ROUTE} theme="underline">
              У меня еще нет аккаунта
            </Link>
          </div>
        </form>
      )}
    />
  );
};
