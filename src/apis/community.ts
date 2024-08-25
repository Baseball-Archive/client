import { isAxiosError } from 'axios';
import { showToast } from '../components/common/toast';
import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient, { getAuthToken } from './apiClient';

export interface CommunityData {
  scheduleId: number;
  title: string;
  content: string;
  picUrl?: string;
  date?: string;
}

export const postCommunity = async (data: CommunityData) => {
  const response = await apiClient.post('/board', data);
  return response.data;
};

export const getCommunity = async () => {
  const response = await apiClient.get('/board?limit=30&currentPage=1');
  return snakeToCamel(response.data);
};

export const getCommunityDetail = async (id: string) => {
  const response = await apiClient.get(`/board/${id}`);
  return response.data;
};

export const deleteCommunity = async (id: string) => {
  const response = await apiClient.delete(`/board/${id}`);
  return response.data;
};

export const updateCommunity = async (id: number, data: CommunityData) => {
  const response = await apiClient.put(`/board/${id}`, data);
  return response.data;
};

export const addCommunityLike = async (id: number) => {
  try {
    const response = await apiClient.post(`/likes/board/${id}`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        showToast(error.response.data.error, 'error');
      } else {
        showToast(error.message, 'error');
      }
    }
  }
};
export const subCommunityLike = async (id: number) => {
  try {
    const response = await apiClient.delete(`/likes/board/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        showToast(error.response.data.error, 'error');
      } else {
        showToast(error.message, 'error');
      }
    }
  }
};
