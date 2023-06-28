import { Button } from '@components/ui-kit/button/button.component';
import { Input } from '@components/ui-kit/input/input.components';
import RadioContainer from '@components/ui-kit/radio/radio-container/radio-container.component';
import { Radio } from '@components/ui-kit/radio/radio.component';

import { SELECT_OPTIONS } from '@pages/sing-up/service/constants';

import css from './sing-up-select.module.css';
import { useForm } from '@hooks/use-form';
import { useToast } from '@hooks/use-toast';

const SingUpSelect = () => {
  const { form } = useForm({ email: '', radio: '' });
  const toast = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { email, radio } = form;
    if (!email?.value || !radio?.value) {
      toast.push({ title: 'Форма не заполнена до конца', theme: 'error' });
      return;
    }
    return { email: email.value, radio: radio.value };
  }

  return (
    <form onSubmit={handleSubmit} className={css['sing-up-select']}>
      <RadioContainer name="register_options" onChange={form.radio?.onChange}>
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

export default SingUpSelect;
