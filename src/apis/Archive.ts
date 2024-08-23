import { snakeToCamel } from '../utils/snakeToCamel';
import { PostArchiveProps } from '../types/Archive';
import apiClient from './apiClient';

export const getArchives = async () => {
  const response = await apiClient.get('/archive');
  return snakeToCamel(response.data);
};

export const postArchive = async (data: PostArchiveProps) => {
  const response = await apiClient.post('/archive', data);
  return response.data;
};

export const deleteArchive = async (id: number) => {
  const response = await apiClient.delete(`/archive/${id}`);
  return response.data;
};
export const editArchive = async (id: number) => {
  const response = await apiClient.put(`/archive/${id}`);
  return response.data;
};
