import { UserProps } from '../hooks/useAuth';
import { LoginProps } from '../pages/User/Login';
import { httpClient } from './http';

export const join = async (userData: UserProps) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userData.uid}`,
    };
    const body = {
      nickname: userData.nickname,
      image: userData.image,
      team: userData.team,
    };
    const response = await httpClient.post(`/users/join`, body, {
      headers,
    });
    console.log('Signup successful: ', response);

    return response.data;
  } catch (err) {
    console.error('Signup failed: ' + err);
  }
};

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>('/users/login', data);

  return response.data;
};
