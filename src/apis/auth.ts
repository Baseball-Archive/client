import { LoginProps } from '../pages/User/Login';
import { SignupProps } from '../pages/User/Signup';
import { httpClient } from './http';

export const join = async (userData: SignupProps) => {
  try {
    const response = await httpClient.post(`/users/join`, userData);
    console.log(httpClient);

    return response.data;
  } catch (err) {
    console.error('Signup failed: ' + err);
  }
};

export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post('/users/reset', data);

  return response.data;
};

export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put('/users/reset', data);

  return response.data;
};

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>('/users/login', data);

  return response.data;
};
