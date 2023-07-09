import { forwardRef, useContext, useEffect, useRef } from 'react';

import css from './toast-item.module.css';

import { clx } from '../../../utils/clx';
import { useAtom } from 'jotai';
import { removeToastAtom } from '@atoms/index';
import { IToastItem } from '@atoms/toast/toast';

export const ToastItem = forwardRef<HTMLDivElement, Exclude<IToastItem, 'nodeRef'>>(
  ({ id, title, theme = 'info', timeout = 5000 }, nodeRef) => {
    const [, removeToast] = useAtom(removeToastAtom);

    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      timeoutId.current = setTimeout(closeHandler, +(timeout || 0));

      return () => {
        timeoutId.current && clearTimeout(timeoutId.current);
      };
    }, []);

    function closeHandler() {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      removeToast(id);
    }

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
