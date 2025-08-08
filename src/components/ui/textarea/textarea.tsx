import styles from './textarea.module.css';

interface TextAreaProps {
  placeholder: string;
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
