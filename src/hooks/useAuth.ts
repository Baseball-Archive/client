import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { join, nickname } from '../apis/auth';
import ROUTES from '../constants/router';
import { User } from '../pages/User/Signup';
import { showToast } from '../components/common/Toast';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

  const userLogin = (data: string) => {
    storeLogin(data);
    showToast('로그인이 완료되었습니다.', 'success');
    navigate(ROUTES.HOME);
  };

  const userSignup = async (data: User) => {
    const response = await join(data);
    navigate(ROUTES.LOGIN);
    showToast('회원가입이 완료되었습니다.', 'success');
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
