import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button/button';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home page</p>
      <Button
        type="button"
        onClick={() => {
          navigate('/form');
        }}
      >
        FORM
      </Button>
    </div>
  );
};
