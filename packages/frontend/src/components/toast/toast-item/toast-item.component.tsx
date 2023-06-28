import { forwardRef, useContext, useEffect, useRef } from 'react';

import css from './toast-item.module.css';

import { TToastProps } from '../../../context/context';
import { ToastContextDispatch } from '../../../context';
import { DELETE_TOAST } from '../../../context/reducers/toast';
import { clx } from '../../../utils/clx';

export const ToastItem = forwardRef<HTMLDivElement, TToastProps>(
  ({ id, title, theme = 'info', timeout = 5000 }, nodeRef) => {
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
    console.log(theme);

    return (
      <div ref={nodeRef} className={clx(css.toasts__item, css[`toast__item_` + theme])}>
        <span className={css['toasts__item-text']}>{title}</span>
        <span className={css['toasts__item-times']} onClick={closeHandler}>
          &times;
        </span>
      </div>
    );
  }
);
