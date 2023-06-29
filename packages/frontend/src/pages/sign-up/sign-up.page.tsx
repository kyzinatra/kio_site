import { Layout } from '@components/layout/layout.component';
import SignUpSelect from './service/sign-up-select/sign-up-select.components';
import css from './sign-up.module.css';
import { useState } from 'react';

import { TSignUpDataForm, TSignUpSelectForm } from '@pages/sign-up/sign-up';
import Swapper from '@components/ui-kit/swapper/swapper.components';
import SignUpForm from './service/sign-up-form/sign-up-form.component';
import { ISignUpDto } from '@api/api';
import { useSignUpMutation } from '@api/routes/sign-up';
import { useToast } from '@hooks/use-toast';

export const SignUp = () => {
  const [combinedForm, setCombinedForm] = useState<Partial<ISignUpDto & { role: string }>>({});
  const [currentView, setView] = useState(0);

  const mutation = useSignUpMutation();

  function onSelectSubmit(form: TSignUpSelectForm) {
    setCombinedForm(l => ({ ...l, ...form }));
    setView(i => ++i);
  }

  function onSubmitHandler(form: TSignUpDataForm) {
    mutation.mutate({ ...combinedForm, ...form } as ISignUpDto);
  }

  function goBack() {
    setView(i => --i);
  }

  const baseFormSelect = { email: combinedForm.email || '', role: combinedForm.role || '' };
  return (
    <Layout protectedFrom="authorized" withHelp>
      <main className={css['sign-up']}>
        <Swapper view={currentView}>
          <SignUpSelect onSubmit={onSelectSubmit} baseForm={baseFormSelect} />
          <SignUpForm onSubmit={onSubmitHandler} isError={mutation.isError} goBack={goBack} />
        </Swapper>
      </main>
    </Layout>
  );
};
