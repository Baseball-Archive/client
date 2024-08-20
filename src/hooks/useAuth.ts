import { LoginProps } from '../pages/User/Login';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { login, join } from '../apis/auth';

export interface UserProps {
  uid: string;
  nickname: string;
  image: string;
  team: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        navigate('/');
      },
      (error) => {
        console.error('Login failed:', error);
      },
    );
  };

  const userSignup = async (data: UserProps) => {
    join(data)
      .then((res) => {
        // 성공적으로 가입 후 처리할 로직
        console.log('useAuth join(data): ', join(data));
        navigate('/users/login');
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
