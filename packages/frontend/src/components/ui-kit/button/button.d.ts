import type {DetailedHTMLProps, ButtonHTMLAttributes, HTMLButtonElement} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  // TODO: Разобраться с типами для colored а то какая-то хуйня очевично
  theme?: "default" | "accent" | "colored-blue" | "colored-purple" | "colored-red" | "colored"
  size?:  "default" | "long" | "xlong" | "xxlong"
}