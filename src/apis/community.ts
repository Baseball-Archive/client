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
  return response.data;
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
