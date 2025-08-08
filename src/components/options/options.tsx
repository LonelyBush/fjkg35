import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from 'react';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';
import style from './options.module.css';
import { TextArea } from '../ui/textarea/textarea';
import { Checkbox } from '../ui/checkbox/checkbox';
import type { FormOptions } from '../../pages/constructor/constructor';
import { validateOptions } from '../../utils/validateOptions';
import { v4 as uuidv4 } from 'uuid';

interface OptionsProps {
  setFormOptions: Dispatch<SetStateAction<FormOptions>>;
}

export const Options = ({ setFormOptions }: OptionsProps) => {
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: Record<string, FormDataEntryValue> = Object.fromEntries(
      formData.entries(),
    );
    if (!validateOptions(formValues)) {
      setError('Inputs values has negative numbers. Try again');
    } else {
      const generateFormInputs = {
        inputs: Array(+formValues.input_options).fill(
          <Input
            key={uuidv4()}
            type="text"
            name="generate_input"
            placeholder="Input"
            label="Generated input"
          />,
        ),
        textareas: Array(+formValues.textarea_options).fill(
          <TextArea key={uuidv4()} placeholder="Generated Textarea" />,
        ),
        checkboxes: Array(+formValues.checkbox_options).fill(
          <Checkbox key={uuidv4()} label="Generated checkbox" />,
        ),
      };
      setFormOptions((prev) => ({ ...prev, ...generateFormInputs }));
      setError('');
    }
  };
  return (
    <div className={style.optionsContainer}>
      <h2>Options</h2>
      <form className={style.optionsFormContainer} onSubmit={handleSubmit}>
        <Input
          type="number"
          name="input_options"
          placeholder="Input options"
          label="Input"
        />
        <Input
          type="number"
          name="textarea_options"
          placeholder="Textarea options"
          label="Textarea"
        />
        <Input
          type="number"
          name="checkbox_options"
          placeholder="Checkbox options"
          label="Checkbox"
        />
        {error && <p className={style.errorStyle}>{error}</p>}
        <Button type="submit">Build</Button>
      </form>
    </div>
  );
};
