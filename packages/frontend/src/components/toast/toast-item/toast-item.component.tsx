import React, { FC, forwardRef, useContext, useEffect, useRef } from 'react';

import { TToastProps } from '../../../context/context';
import { ToastContextDispatch } from '../../../context';
import { DELETE_TOAST } from '../../../context/reducers/toast';

export const ToastItem = forwardRef<HTMLDivElement, TToastProps>(({ id, title, timeout = 5000 }, nodeRef) => {
  const dispatch = useContext(ToastContextDispatch);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutId.current = setTimeout(closeHandler, +(timeout || 0));

    return () => {
      timeoutId.current && clearTimeout(timeoutId.current);
    };
  }, []);

  function closeHandler() {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    dispatch({
      type: DELETE_TOAST,
      payload: { id }
    });
  }

  return (
    <div ref={nodeRef} className="toasts__item">
      <span className="toasts__item-text">{title}</span>
      <span className="toasts__item-times" onClick={closeHandler}>
        &times;
      </span>
    </div>
  );
});
