import { LoginProps } from '../pages/User/Login';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { login, join, nickname } from '../apis/auth';
import ROUTES from '../constants/router';
import { User } from '../pages/User/Signup';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        navigate(ROUTES.HOME);
      },
      (error) => {
        console.error('Login failed:', error);
      },
    );
  };

  const userSignup = async (data: User) => {
    const response = await join(data);
    navigate(ROUTES.LOGIN);
    return response;
  };

  const userNickname = async (data: Pick<User, 'nickname'>) => {
    const response = await nickname(data);

    return response;
  };

  return {
    userLogin,
    userSignup,
    userNickname,
  };
};
