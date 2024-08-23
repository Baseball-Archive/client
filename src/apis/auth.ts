import ROUTES from '../constants/router';
import { useAuth } from '../hooks/useAuth';
import { User } from '../pages/User/Signup';
import { auth } from '../service/firebase';
import apiClient from './apiClient';

export const join = async (userData: User) => {
  try {
    const response = await apiClient.post(ROUTES.JOIN, userData);
    return response.data;
  } catch (error) {
    throw new Error(`Error status: ${error}`);
  }
};

// const { userLogin } = useAuth();
// export const login = async () => {
//   try {
//     const response = await auth.currentUser?.getIdToken();
//     userLogin(response);
//     return response;
//   } catch (error) {
//     throw new Error(`Error status: ${error}`);
//   }
// };

export const nickname = async (data: Pick<User, 'nickname'>) => {
  try {
    const response = await apiClient.post(ROUTES.CHECK_NICKNAME, data);
    return response.data;
  } catch (error) {
    throw new Error(`Error status: ${error}`);
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
