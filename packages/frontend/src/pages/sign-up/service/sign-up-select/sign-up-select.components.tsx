import { Button } from '@components/ui-kit/button/button.component';
import { Input } from '@components/ui-kit/input/input.components';
import RadioContainer from '@components/ui-kit/radio/radio-container/radio-container.component';
import { Radio } from '@components/ui-kit/radio/radio.component';

import { SELECT_OPTIONS } from '@pages/sign-up/service/sign-up-select/constants';

import { FC } from 'react';

import css from './sign-up-select.module.css';
import { useForm } from '@hooks/use-form';
import { useToast } from '@hooks/use-toast';

import { ISignUpSelect } from './sign-up-select';
import { TSignUpSelectForm } from '@pages/sign-up/sign-up';

const SignUpSelect: FC<ISignUpSelect> = ({ onSubmit, baseForm }) => {
  const { form } = useForm<TSignUpSelectForm>(baseForm);
  const toast = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, role } = form;

    if (!email?.value || !role?.value) {
      toast.push({ title: 'Форма не заполнена до конца', theme: 'error' });
      return;
    }
    onSubmit({ email: email.value, role: role.value });
  }

  return (
    <form onSubmit={handleSubmit} className={css['sign-up-select']}>
      <RadioContainer name="register_options" {...form.role}>
        {SELECT_OPTIONS.map(({ title, content }) => (
          <Radio title={title} value={title} key={title}>
            {content}
          </Radio>
        ))}
      </RadioContainer>
      <Input stretch placeholder="Электронная почта" type="email" required {...form.email} />
      <Button stretch theme="accent" type="submit">
        Продолжить
      </Button>
    </form>
  );
};

export default SignUpSelect;
