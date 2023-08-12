import { ReactElement } from 'react';
import { IOption } from './option/option';

export interface ISelect {
  icon?: string;
  children: ReactElement<IOption> | ReactElement<IOption>[];
  isInPopup?: boolean;
  value: string;
  onChange?: (title: string) => void;
}
