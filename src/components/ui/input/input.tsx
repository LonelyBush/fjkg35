import styles from './input.module.css';

interface InputProps {
  placeholder: string;
  label: string;
  name: string;
  type: 'number' | 'text';
}
export const Input = ({ placeholder, label, name, type }: InputProps) => {
  return (
    <label>
      {label}
      <input
        name={name}
        className={styles.inputStyles}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};
