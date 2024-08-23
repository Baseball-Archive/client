import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import ROUTES from '../../constants/router';

const GoogleButton = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const onClick = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button size="small" scheme="secondary" onClick={onClick}>
      <img className="h-10" src="/public/icons/google/google-g-icon.svg" />
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
