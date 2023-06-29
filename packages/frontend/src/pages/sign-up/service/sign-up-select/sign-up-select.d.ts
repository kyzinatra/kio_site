import { TSignUpSelectForm } from '@pages/sign-up/sign-up';

export interface ISignUpSelect {
  onSubmit: (formPart: TSignUpSelectForm) => void;
  baseForm: TSignUpSelectForm;
}
