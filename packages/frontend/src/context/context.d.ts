import { LegacyRef, RefObject } from 'react';
import { IToast } from '../components/toast/toast';


export type TToastProps = (IToast & { id: string })



export interface IState {
  toasts: (TToastProps & {nodeRef: RefObject<HTMLDivElement>})[];
}

export interface IActionType {
  type: string;
  payload?: { [key: string]: any };
}
