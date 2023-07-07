import { createContext, Dispatch } from 'react';
import { IActionType, IState } from './context';
import { initial } from './reducers/toast';

export const ToastContext = createContext<IState>(initial());
export const ToastContextDispatch = createContext<Dispatch<IActionType>>(() => null);
