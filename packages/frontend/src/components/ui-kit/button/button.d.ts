import type {DetailedHTMLProps, ButtonHTMLAttributes, HTMLButtonElement} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme?: "default" | "accent" | "colored-blue" | "colored-purple" | "colored-red" | "colored"
  size?:  "default" | "long" | "xlong" | "xxlong"
}