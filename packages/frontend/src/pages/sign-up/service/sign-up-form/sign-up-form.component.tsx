import { FC, ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { ISignUpFormProps } from './sign-up-form';
import { useForm } from '@hooks/use-form';
import UserConnections from '@components/user/user-connections/user-connections';
import { Input } from '@components/ui-kit/input/input.components';
import { Button } from '@components/ui-kit/button/button.component';

import { capitalize } from '@utils/capitalize';

import css from './sign-up-form.module.css';
import { useToast } from '@hooks/use-toast';
import { useModified } from '@hooks/use-modified';

const SignUpForm: FC<ISignUpFormProps> = ({ onSubmit, isError, goBack, isLoading }) => {
  const { form } = useForm({ password: '', fullName: '', passwordRepeat: '' });
  const [isErrorState, setErrorState] = useState(false);
  const [isModified, setModified, { onFocus }] = useModified();
  const toast = useToast();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorState(false);
    setModified(false);

    if (form.password?.value !== form.passwordRepeat?.value) {
      toast.push({ title: 'Пароли не совпадают', theme: 'error' });
      setErrorState(true);
      return;
    }

    const fullName = form.fullName?.value.split(' ').filter(Boolean);

    if (!fullName || fullName.length < 2) {
      toast.push({ title: 'Введите полное имя', theme: 'error' });
      setErrorState(true);
      return;
    }

    onSubmit({
      password: form.password?.value || '',
      name: fullName[1] || '',
      surname: fullName[0] || '',
      patronymic: fullName[2] || ''
    });
  }

  const handleUserChange = useCallback(
    function handleUserChange(e: ChangeEvent<HTMLInputElement>) {
      form.fullName?.onChange(capitalize(e.target.value));
    },
    [form.fullName]
  );

  const isErrorStatus = (isError || isErrorState) && !isModified;

  return (
    <form onSubmit={handleSubmit} className={css['sign-up-form']}>
      <UserConnections>Зарегистрироваться через социальные сети</UserConnections>
      <h2>Или создайте вручную</h2>
      <Input
        required
        placeholder="Ваше ФИО"
        stretch
        value={form.fullName?.value}
        onChange={handleUserChange}
        autoComplete="name"
        disabled={isLoading}
        onFocus={onFocus}
        isError={isErrorStatus}
      />
      <Input
        required
        type="password"
        pattern=".{6,}"
        title="Шесть или более символов"
        placeholder="Пароль"
        stretch
        autoComplete="new-password"
        isError={isErrorStatus}
        disabled={isLoading}
        onFocus={onFocus}
        {...form.password}
      />
      <Input
        required
        type="password"
        pattern=".{6,}"
        title="Шесть или более символов"
        autoComplete="new-password"
        placeholder="Повтор пароля"
        onFocus={onFocus}
        isError={isErrorStatus}
        disabled={isLoading}
        stretch
        {...form.passwordRepeat}
      />
      <div className={css['sign-up-form__buttons']}>
        <Button onClick={goBack} type="button" disabled={isLoading}>
          Назад
        </Button>
        <Button theme="accent" stretch disabled={isLoading}>
          Завершить регистрацию
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
