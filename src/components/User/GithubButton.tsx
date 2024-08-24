import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { User } from '../../pages/User/Signup';
import { useAuth } from '../../hooks/useAuth';
import ROUTES from '../../constants/router';

const GithubButton = () => {
  const navigate = useNavigate();
  const provider = new GithubAuthProvider();
  const { userLogin, userSignup } = useAuth();

  const onClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData: User = {
        nickname: user.email || '',
        profileImageUrl: auth.currentUser?.photoURL || '',
        myTeam: null,
      };

      const token = await user.getIdToken();
      userLogin(token);
      await userSignup(userData);
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="rounded-full bg-white" onClick={onClick}>
      <img className="h-16 w-16" src="/public/icons/github/github-mark.svg" />
    </button>
  );
};
export default GithubButton;
