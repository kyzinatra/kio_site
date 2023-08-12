import { Layout } from '@components/layout/layout.component';
import SignUpSelect from './service/sign-up-select/sign-up-select.components';
import css from './sign-up.module.css';
import { useState } from 'react';

import { TSignUpDataForm, TSignUpSelectForm } from '@pages/sign-up/sign-up';
import Swapper from '@components/ui-kit/swapper/swapper.component';
import SignUpForm from './service/sign-up-form/sign-up-form.component';
import { ISignUpDto } from '@api/api';
import { useSignUpMutation } from '@api/index';

export const SignUp = () => {
  const [combinedForm, setCombinedForm] = useState<Partial<ISignUpDto & { role: string }>>({});
  const [currentView, setView] = useState(0);

  const mutation = useSignUpMutation();

  const onSelectSubmit = (form: TSignUpSelectForm) => {
    setCombinedForm(l => ({ ...l, ...form }));
    setView(i => ++i);
  };

  const onSubmitHandler = (form: TSignUpDataForm) => {
    mutation.mutate({ ...combinedForm, ...form } as ISignUpDto);
  };

  const goBack = () => {
    setView(i => --i);
  };

  const baseFormSelect = { email: combinedForm.email || '', role: combinedForm.role || '' };
  return (
    <Layout protectedFrom="authorized" withHelp>
      <main className={css['sign-up']}>
        <Swapper view={currentView}>
          <SignUpSelect onSubmit={onSelectSubmit} baseForm={baseFormSelect} />
          <SignUpForm onSubmit={onSubmitHandler} isLoading={mutation.isLoading} goBack={goBack} />
        </Swapper>
      </main>
    </Layout>
  );
};
