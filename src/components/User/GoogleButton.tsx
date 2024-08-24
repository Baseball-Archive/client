import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import ROUTES from '../../constants/router';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../pages/User/Signup';

const GoogleButton = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
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
    <button className="rounded-full bg-slate-200" onClick={onClick}>
      <img className="h-16 w-16" src="/public/icons/google/google-g-icon.svg" />
    </button>
  );
};

export default GoogleButton;
