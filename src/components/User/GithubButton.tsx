import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/router';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../pages/User/Signup';
import { auth } from '../../service/firebase';

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

      const token = user.uid;

      userLogin(token);
      await userSignup(userData);
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="rounded-full bg-white" onClick={onClick}>
      <img className="h-16 w-16" src="/icons/github/github-mark.svg" />
    </button>
  );
};
export default GithubButton;
