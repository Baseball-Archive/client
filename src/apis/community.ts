import apiClient, { getAuthToken } from './apiClient';

export interface CommunityData {
  scheduleId: number;
  title: string;
  content: string;
  picUrl?: string;
}

export const postCommunity = async (data: CommunityData) => {
  const response = await apiClient.post('/board', data);
  return response.data;
};

export const getCommunity = async () => {
  const response = await apiClient.get('/board?limit=10&currentPage=1');
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
