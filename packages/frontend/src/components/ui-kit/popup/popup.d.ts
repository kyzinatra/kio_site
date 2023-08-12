import { ComponentProps } from 'react';
import type ReactPopup from 'reactjs-popup';
export interface IPopup extends ComponentProps<typeof ReactPopup> {
  closeOnScroll?: boolean;
}
