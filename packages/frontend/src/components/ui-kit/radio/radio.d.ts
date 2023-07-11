export interface IRadio {
  title: string;
  value: string | number;
  checked?: boolean;
  name?: string;
  onChange?: () => void;
}