import { useElement } from '@hooks/use-element.hook';
import { FC, PropsWithChildren, MouseEvent, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';

import './modal.animation.css';
import css from './modal.module.css';
import { IModal } from './modal';

import { CSSTransition } from 'react-transition-group';
import { BASE_ANIMATION_TIME } from '@constants/layout';

export const Modal: FC<PropsWithChildren<IModal>> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const portalContainer = useElement('aside');

  const showModal = () => dialogRef.current?.showModal();
  const closeModal = () => {
    dialogRef.current?.close();
  };

  const dialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (!dialogRef.current) return;

    const rect = dialogRef.current.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      onClose();
    }
  };

  if (!portalContainer) return null;

  return ReactDOM.createPortal(
    <CSSTransition
      nodeRef={dialogRef}
      in={isOpen}
      unmountOnExit
      timeout={BASE_ANIMATION_TIME}
      onEnter={showModal}
      onExited={closeModal}
      classNames="modal"
    >
      <dialog ref={dialogRef} onClose={onClose} onClick={dialogClick} className={css.modal}>
        {children}
      </dialog>
    </CSSTransition>,
    portalContainer
  );
};
