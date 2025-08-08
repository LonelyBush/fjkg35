import type { ChangeEventHandler } from 'react';
import styles from './textarea.module.css';

interface TextAreaProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
export const TextArea = ({ placeholder }: TextAreaProps) => {
  return (
    <input
      className={styles.areaStyles}
      type="textarea"
      placeholder={placeholder}
    />
  );
};
