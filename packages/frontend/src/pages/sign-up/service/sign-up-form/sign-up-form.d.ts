import { TSignUpDataForm } from "@pages/sign-up/sign-up";

export interface ISignUpFormProps {
  onSubmit: (values: TSignUpDataForm) => void;
  isLoading?: boolean;
  goBack: () => void;
}