import './popup.animation.css';
import { FC, forwardRef, useEffect, useRef } from 'react';

import ReactPopup from 'reactjs-popup';
import { IPopup } from './popup';
import { PopupActions } from 'reactjs-popup/dist/types';

export const Popup = forwardRef<PopupActions, IPopup>(({ closeOnScroll = false, ...props }, popupRef) => {
  const insidePopupRef = useRef<PopupActions | null>(null);

  useEffect(() => {
    if (!closeOnScroll) return;
    function onScroll() {
      if (insidePopupRef) insidePopupRef.current?.close();
    }
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [insidePopupRef.current]);

  function setRef(actions: PopupActions) {
    if (typeof popupRef === 'function') popupRef(actions);
    else if (popupRef) popupRef.current = actions;

    insidePopupRef.current = actions;
  }

  return <ReactPopup {...props} ref={setRef} />;
});
