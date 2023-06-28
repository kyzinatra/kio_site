import { Layout } from '@components/layout/layout.component';
import SingUpSelect from './service/sing-up-select/sing-up-select.components';
import css from './sing-up.module.css';
import { useState } from 'react';

import { TSingUpForm, TSingUpSelectForm } from 'src/types/forms/sing-up-form';
import Swapper from '@components/ui-kit/swapper/swapper.components';

export const SingUp = () => {
  const [combinedForm, setCombinedForm] = useState<TSingUpForm>({});
  const [currentView, setView] = useState(0);

  function onSubmitHandler(form: TSingUpSelectForm) {
    console.log(form, currentView);
    setCombinedForm(l => ({ ...l, ...form }));
    setView(i => ++i);
  }

  return (
    <Layout protectedFrom="authorized" withHelp>
      <main className={css['sing-up']}>
        <Swapper view={currentView}>
          <SingUpSelect onSubmit={onSubmitHandler} />
          <></>
        </Swapper>
      </main>
    </Layout>
  );
};
