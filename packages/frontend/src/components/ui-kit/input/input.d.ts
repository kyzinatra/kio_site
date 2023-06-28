import type {  DetailedHTMLProps, InputHTMLAttributes } from 'react';


export interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  stretch?: boolean;
  isError?: boolean;
} 