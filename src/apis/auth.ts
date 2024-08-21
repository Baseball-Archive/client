import { LoginProps } from '../pages/User/Login';
import ROUTES from '../constants/router';
import { httpClient } from './http';
import { auth } from '../service/firebase';
import { User } from '../pages/User/Signup';

export const join = async (userData: User) => {
  const { nickname, image, team } = userData;

  const response = await httpClient.post(
    ROUTES.JOIN,
    {
      nickname,
      image,
      team,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
      },
    },
  );
  return response.data;
};

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>(ROUTES.LOGIN, data);

  return response.data;
};
