import { LoginProps } from '../pages/User/Login';
import ROUTES from '../constants/router';
import { auth } from '../service/firebase';
import { User } from '../pages/User/Signup';

const JOIN_URL = `http://localhost:5000${ROUTES.JOIN}`;
const LOGIN_URL = `http://localhost:5000${ROUTES.LOGIN}`;

export const join = async (userData: User) => {
  const { nickname, profileImageUrl, myTeam } = userData;
  const response = await fetch(JOIN_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
    },
    body: JSON.stringify({
      nickname,
      profileImageUrl,
      myTeam,
    }),
  });
  return response.json();
};

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginProps) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log('response', response);

  return response.json();
};
