import { IUserInitialBillet } from '../user-initial-billet/user-initial-billet';

export interface IUserInputBillet extends Pick<IUserInitialBillet, title | subtitle | footerText> {
  mainText?: string;
  btnText?: string;
  title: string;
  value: any;
  validate?: (data: string) => boolean | string;
  onSave: (data: string) => void;
}
