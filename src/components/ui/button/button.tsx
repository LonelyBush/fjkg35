import type { ReactNode } from 'react';
import style from './button.module.css';

interface BtnProps {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ type, onClick, children }: BtnProps) => {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};
