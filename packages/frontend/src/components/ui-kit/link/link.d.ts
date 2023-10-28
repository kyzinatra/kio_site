import type { RefAttributes, HTMLAnchorElement } from 'react';
import type { NavLinkProps } from 'react-router-dom';

export interface ILink extends NavLinkProps, RefAttributes<HTMLAnchorElement> {
  theme?: "default" | "block-hover" | "accent" | "underline"
  size?: "default" | "long" | "xlong" | "xxlong" 
  isAlert?: boolean
}

export type TLinkClassNames =  {
        isActive: boolean;
        isPending: boolean;
    }