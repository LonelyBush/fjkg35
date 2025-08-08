import type { FormOptions } from '../../pages/constructor/constructor';
import style from './generatedForm.module.css';

interface GeneratedFormProps {
  formOptions: FormOptions;
}

export const GeneratedForm = ({ formOptions }: GeneratedFormProps) => {
  return (
    <div className={style.generatedContainer}>
      <h2>Form</h2>
      <form className={style.generatedFormContainer}>
        {formOptions.inputs}
        {formOptions.textareas}
        {formOptions.checkboxes}
      </form>
    </div>
  );
};
