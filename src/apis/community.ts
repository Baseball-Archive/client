import apiClient from './apiClient';

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
  const response = await apiClient.get('/board');
  return response.data;
};
