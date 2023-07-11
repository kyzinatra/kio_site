import { Button } from '@components/ui-kit/button/button.component';
import { Radio } from '@components/ui-kit/radio/radio.component';

import { SELECT_OPTIONS } from '@pages/sign-up/service/sign-up-select/constants';

import { FC } from 'react';

import css from './sign-up-select.module.css';
import { useToast } from '@hooks/use-toast';

import { ISignUpSelect } from './sign-up-select';
import { TSignUpSelectForm } from '@pages/sign-up/sign-up';
import { Form } from 'react-final-form';
import { RadioContainerFormField } from '@components/form/radio-container-form-field/radio-container-form-field.component';
import { InputFormField } from '@components/form/input-form-field/input-form-field.component';

const SignUpSelect: FC<ISignUpSelect> = ({ onSubmit, baseForm }) => {
  const toast = useToast();
  const handleOnSubmit = (values: TSignUpSelectForm) => {
    const { email, role } = values;

    if (!email || !role) {
      toast.push({ title: 'Форма не заполнена до конца', theme: 'error' });
      return;
    }
    onSubmit({ email: email, role: role });
  };

  return (
    <Form onSubmit={handleOnSubmit} initialValues={baseForm}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={css['sign-up-select']}>
          <RadioContainerFormField name="role">
            {SELECT_OPTIONS.map(({ title, content }) => (
              <Radio title={title} value={title} key={title}>
                {content}
              </Radio>
            ))}
          </RadioContainerFormField>
          <InputFormField stretch placeholder="Электронная почта" name="email" type="email" required />
          <Button stretch theme="accent" type="submit">
            Продолжить
          </Button>
        </form>
      )}
    </Form>
  );
};

export default SignUpSelect;
