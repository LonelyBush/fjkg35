import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';

export const Options = () => {
  return (
    <form>
      <Input />
      <Input />
      <Input />
      <Button type="submit">Build</Button>
    </form>
  );
};
