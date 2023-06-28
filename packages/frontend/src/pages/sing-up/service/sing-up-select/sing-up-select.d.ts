import { TSingUpSelectForm } from 'src/types/forms/sing-up-form';

export interface ISingUpSelect {
  onSubmit: (formPart: TSingUpSelectForm) => void;
}
