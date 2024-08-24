import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { getUser, join, nickname } from '../apis/auth';
import ROUTES from '../constants/router';
import { User } from '../pages/User/Signup';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

  const userLogin = (data: string) => {
    storeLogin(data);
    alert('로그인이 완료되었습니다.');
    navigate(ROUTES.HOME);
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

  const checkUserExists = async (data: string) => {
    const response = await getUser();

    return response;
  };
  return {
    checkUserExists,
    userLogin,
    userSignup,
    userNickname,
  };
};
