import React, { PropsWithChildren, FC } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('toasts') as HTMLElement;

export const Toast: FC<PropsWithChildren> = ({ children }) => {
  return ReactDOM.createPortal(<div>{children}</div>, container);
};
