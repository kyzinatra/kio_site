import React, { PropsWithChildren, FC, useContext, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ToastContext } from '../../context';

import css from './toast.module.css';
import './toast.animation.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ToastItem } from './toast-item/toast-item.component';

const container = document.getElementById('toasts') as HTMLElement;

export const Toast: FC = () => {
  const { toasts } = useContext(ToastContext);

  return ReactDOM.createPortal(
    <TransitionGroup className={css.toasts}>
      {toasts.map(({ id, nodeRef, ...props }) => (
        <CSSTransition timeout={200} key={id} in={true} nodeRef={nodeRef} classNames="toasts__item">
          <ToastItem id={id} ref={nodeRef} {...props} />
        </CSSTransition>
      ))}
    </TransitionGroup>,
    container
  );
};
