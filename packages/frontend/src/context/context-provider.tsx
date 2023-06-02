import React, { FC, PropsWithChildren, useReducer } from 'react';
import { ToastContext, ToastContextDispatch } from '.';
import { initial, reducer } from './reducers/toast';

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial());

  return (
    <ToastContext.Provider value={state}>
      <ToastContextDispatch.Provider value={dispatch}>{children}</ToastContextDispatch.Provider>
    </ToastContext.Provider>
  );
};

export default ContextProvider;
