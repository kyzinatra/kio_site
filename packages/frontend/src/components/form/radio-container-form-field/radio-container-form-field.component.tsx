import RadioContainer from '@components/ui-kit/radio/radio-container/radio-container.component';
import { FC } from 'react';
import { Field } from 'react-final-form';

type FieldParams = { name: string } & Parameters<typeof RadioContainer>['0'];

export const RadioContainerFormField: FC<FieldParams> = ({ children, ...props }) => {
  return (
    <Field name={props.name}>
      {({ input }) => (
        <RadioContainer {...props} {...input}>
          {children}
        </RadioContainer>
      )}
    </Field>
  );
};
