import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/router';
import { auth } from '../../service/firebase';
import Button from '../common/Button';

const GithubButton = () => {
  const navigate = useNavigate();
  const provider = new GithubAuthProvider();

  const onClick = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log(auth.currentUser?.getIdToken());

      navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button size="small" scheme="primary" onClick={onClick}>
      <img className="h-10" src="/public/icons/github/github-mark-white.svg" />
      Continue with Github
    </Button>
  );
};
export default GithubButton;
