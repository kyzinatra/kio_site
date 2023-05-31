import type { RefAttributes, HTMLAnchorElement } from 'react';
import type { NavLinkProps } from 'react-router-dom';

export interface ILink extends NavLinkProps, RefAttributes<HTMLAnchorElement> {
  theme?: "default" | "accent";
  size?: "default" | "long" | "xlong" | "xxlong";
  underline?: boolean;

}

export type TLinkClassNames =  {
        isActive: boolean;
        isPending: boolean;
    }