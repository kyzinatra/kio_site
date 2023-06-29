export interface IRadioContainer {
  name: string;
  children:React.ReactElement | React.ReactElement[];
  onChange?: ( value: string | number) => void;
  value?: string | number;
}