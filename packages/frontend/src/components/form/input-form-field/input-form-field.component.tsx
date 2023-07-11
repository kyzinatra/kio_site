import { Input } from '@components/ui-kit/input/input.components';
import { FC } from 'react';
import { Field } from 'react-final-form';

type FieldParams = { name: string; mutate?: (str: string) => string } & Parameters<typeof Input>['0'];

export const InputFormField: FC<FieldParams> = ({ name, mutate, ...otherProps }) => {
  return (
    <Field name={name}>
      {({ input: { onChange, ...other } }) => (
        <Input
          {...otherProps}
          {...other}
          onChange={e => {
            if (mutate) return onChange(mutate(e.target.value));
            onChange(e);
          }}
        />
      )}
    </Field>
  );
};
