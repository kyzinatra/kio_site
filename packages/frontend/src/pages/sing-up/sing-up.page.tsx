import { Layout } from '@components/layout/layout.component';
import SingUpSelect from './service/sing-up-select/sing-up-select.components';
import css from './sing-up.module.css';
export const SingUp = () => {
  return (
    <Layout protectedFrom="authorized" withHelp>
      <main className={css['sing-up']}>
        <SingUpSelect />
      </main>
    </Layout>
  );
};
