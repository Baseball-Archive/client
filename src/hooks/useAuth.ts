import { LoginProps } from '../pages/User/Login';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { login, resetPassword, resetRequest, signup } from '../apis/auth';
import { SignupProps } from '../pages/User/Signup';
import { useState } from 'react';

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

  const userSignup = (data: SignupProps) => {
    signup(data).then(
      (res) => {
        navigate('/login');
      },
      (error) => {
        console.error('Signup failed:', error);
      },
    );
  };

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(
      () => {
        navigate('/login');
      },
      (error) => {
        console.error('Password reset failed:', error);
      },
    );
  };

  const [resetRequested, setResetRequested] = useState(false);
  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(
      () => {
        setResetRequested(true);
      },
      (error) => {
        console.error('Reset request failed:', error);
      },
    );
  };

  return {
    userLogin,
    userSignup,
    userResetPassword,
    userResetRequest,
    resetRequested,
  };
};
