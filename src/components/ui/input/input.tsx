import type { ChangeEventHandler } from 'react';
import styles from './input.module.css';

interface InputProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
export const Input = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <input
      className={styles.inputStyles}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
