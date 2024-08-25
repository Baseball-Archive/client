import axios, { isAxiosError } from 'axios';
import { showToast } from '../components/common/Toast';
import { EditArchiveProps, PostArchiveProps } from '../types/Archive';
import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient from './apiClient';

export const getArchives = async () => {
  try {
    const response = await apiClient.get('/archive');
    return snakeToCamel(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        showToast(error.response.data.error, 'error');
      } else {
        showToast(error.message, 'error');
      }
    }
  }
  return [];
};
export const getArchiveContent = async (id: string) => {
  try {
    const response = await apiClient.get(`/archive/public/${id}`);
    return snakeToCamel(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        showToast(error.response.data.error, 'error');
      } else {
        showToast(error.message, 'error');
      }
    }
  }
  return { archive: {} };
};
export const fetchPublicArchives = async ({ pageParam = 1 }) => {
  const limit = 10;
  try {
    const response = await apiClient.get('/archive/public', {
      params: {
        limit,
        currentPage: pageParam,
      },
    });

    return snakeToCamel(response.data);
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

export const postArchive = async (data: PostArchiveProps) => {
  const response = await apiClient.post('/archive', data);
  return response.data;
};
export const addArchiveLike = async (id: number) => {
  try {
    const response = await apiClient.post(`/likes/archive/${id}`);
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
export const editArchive = async (data: EditArchiveProps) => {
  const response = await apiClient.put(`/archive/${data.id}`, data.archiveData);
  return response.data;
};

export const deleteArchive = async (id: number) => {
  const response = await apiClient.delete(`/archive/${id}`);
  return response.data;
};
export const subArchiveLike = async (id: number) => {
  try {
    const response = await apiClient.delete(`/likes/archive/${id}`);
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
