import { FC } from 'react';
import ReactDOM from 'react-dom';

import css from './toast.module.css';
import './toast.animation.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ToastItem } from './toast-item/toast-item.component';
import { BASE_ANIMATION_TIME } from '@constants/layout';
import { readToastAtom } from '@atoms/index';

import { useAtom } from 'jotai';

const container = document.getElementById('toasts') as HTMLElement;

/**
 * @description Toast component for displaying notifications. Uses context to get the toasts array
 * DO NOT USE THIS COMPONENT DIRECTLY, use the useToast hook instead
 */
export const Toast: FC = () => {
  const [toasts] = useAtom(readToastAtom);

  return ReactDOM.createPortal(
    <TransitionGroup className={css.toasts}>
      {toasts.map(({ id, nodeRef, ...props }) => (
        <CSSTransition timeout={BASE_ANIMATION_TIME} key={id} in nodeRef={nodeRef} classNames="toasts__item">
          <ToastItem id={id} ref={nodeRef} {...props} />
        </CSSTransition>
      ))}
    </TransitionGroup>,
    container
  );
};
