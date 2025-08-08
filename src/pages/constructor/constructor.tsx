import { useState, type ReactNode } from 'react';
import { Options } from '../../components/options/options';
import style from './constructor.module.css';
import { GeneratedForm } from '../../components/generatedForm/generatedForm';

export interface FormOptions {
  inputs: ReactNode[];
  textareas: ReactNode[];
  checkboxes: ReactNode[];
}

export const Constructor = () => {
  const [formOptions, setFormOptions] = useState<FormOptions>({
    inputs: [],
    textareas: [],
    checkboxes: [],
  });

  console.log(formOptions);
  return (
    <div className={style.constructorContainer}>
      <Options setFormOptions={setFormOptions} />
      <GeneratedForm formOptions={formOptions} />
    </div>
  );
};
