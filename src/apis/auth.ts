import { LoginProps } from '../pages/User/Login';
import { User } from '../pages/User/Signup';

const JOIN_URL = `http://localhost:5000${ROUTES.JOIN}`;
const LOGIN_URL = `http://localhost:5000${ROUTES.LOGIN}`;
const CHECKNCINAME_URL = `http://localhost:5000${ROUTES.CHECK_NICKNAME}`;

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

  return response;
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

  return response.json();
};

export const nickname = async (data: Pick<User, 'nickname'>) => {
  const { nickname } = data;

  const response = await fetch(`${CHECKNCINAME_URL}/${nickname}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error status: ${response.status}`);
  }
  return await response.json();
};
