import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'secondary' | 'transparent';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
}
