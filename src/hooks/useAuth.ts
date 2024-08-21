import { LoginProps } from '../pages/User/Login';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { login, join } from '../apis/auth';
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
    join(data)
      .then((res) => {
        navigate(ROUTES.LOGIN);
      })
      .catch((error) => {
        console.error('Signup failed:', error);
      });
  };

  return {
    userLogin,
    userSignup,
  };
};
