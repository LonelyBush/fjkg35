import style from './checkbox.module.css';

interface CheckBoxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckBoxProps) => {
  return (
    <label className={style.label}>
      {label}
      <input type="checkbox" />
      <span className={style.checkmark}></span>
    </label>
  );
};
