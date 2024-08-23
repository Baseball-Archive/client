import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import ROUTES from '../../constants/router';
import { User } from '../../pages/User/Signup';
import { useAuth } from '../../hooks/useAuth';
import { LoginProps } from '../../pages/User/Login';

const GithubButton = () => {
  const navigate = useNavigate();
  // const { userSignup, userLogin } = useAuth();
  const provider = new GithubAuthProvider();

  const onClick = async () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        // if (!auth.currentUser?.email) {
        //   const userData: User = {
        //     nickname: `${user.email}`,
        //     profileImageUrl: `${auth.currentUser?.photoURL}`,
        //     myTeam: null,
        //   };

        //   return userSignup(userData);
        // }
        console.log(user);
      });
    } catch (err) {
      console.error(err);
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
