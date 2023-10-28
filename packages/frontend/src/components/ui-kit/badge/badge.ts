import { MouseEvent, KeyboardEvent } from 'react';

export interface IBadge {
  src: string;
  width?: string | number;
  height?: string | number;
  to?: string;
  className?: string;
}
