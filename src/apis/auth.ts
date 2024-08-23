import { LoginProps } from '../pages/User/Login';
import { User } from '../pages/User/Signup';
import apiClient from './apiClient';

export const join = async (userData: User) => {
  try {
    const response = await apiClient.post('/users/join', userData);
    return response.data;
  } catch (error) {
    console.error('회원가입 실패: ', error);
    throw new Error(`회원가입 실패:  ${error}`);
  }
};

interface LoginResponse {
  token: string;
}
export const login = async (data: LoginProps) => {
  try {
    const response = await apiClient.post<LoginResponse>('/users/login', data);
    return response.data;
  } catch (error) {
    console.error('로그인실패: ', error);
    throw new Error(`로그인 실패:  ${error}`);
  }
};

export const getUser = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('회원정보가 없습니다: ', error);
    throw new Error(`회원정보 조회 실패:  ${error}`);
  }
};

export interface updateUserProps {
  nickname?: string;
  picURL?: string;
  myTeam?: number;
}
export const updateUser = async (data: updateUserProps) => {
  try {
    const response = await apiClient.put('/users', data);
    return response.data;
  } catch (error) {
    console.error('회원정보 수정 실패했습니다.: ', error);
    throw new Error(`회원정보 수정 실패:  ${error}`);
  }
};
