import apiClient from './apiClient';
import { SnakeArchive } from '../types/Archive';

export const getArchives = async () => {
  const response = await apiClient.get('/archive');
  return response.data;
};

export const postArchive = async (data: SnakeArchive) => {
  const response = await apiClient.post('/archive', data);
  return response.data;
};
