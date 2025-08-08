import { Input } from '../components/ui/input/input';
import { TextArea } from '../components/ui/textarea/textarea';

export const Form = () => {
  return (
    <div>
      <Input
        onChange={(e) => console.log(e)}
        placeholder="Input"
        value="
      1223"
      />
      <TextArea
        onChange={(e) => console.log(e)}
        placeholder="Text area"
        value="
      1223"
      />
    </div>
  );
};
