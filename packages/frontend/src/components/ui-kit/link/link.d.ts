import type { RefAttributes, HTMLAnchorElement } from 'react';
import type { NavLinkProps } from 'react-router-dom';

export interface ILink extends NavLinkProps, RefAttributes<HTMLAnchorElement> {
<<<<<<< HEAD
  theme?: "default" | "accent" | "underline"
  size?: "default" | "long" | "xlong" | "xxlong" 
||||||| 12a1aaf
  theme?: "default" | "accent"
  size?: "default" | "long" | "xlong" | "xxlong"
=======
  theme?: "default" | "accent";
  size?: "default" | "long" | "xlong" | "xxlong";
  underline?: boolean;

>>>>>>> master
}

export type TLinkClassNames =  {
        isActive: boolean;
        isPending: boolean;
    }