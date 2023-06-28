export interface IRadio {
  title: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}