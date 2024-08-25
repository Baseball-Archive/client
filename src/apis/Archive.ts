import axios, { isAxiosError } from 'axios';
import { showToast } from '../components/common/toast';
import { EditArchiveProps, PostArchiveProps } from '../types/Archive';
import { AddComment, Comment } from '../types/Comment';
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
export const getArchiveDetailWithComments = async (id: string) => {
  try {
    const response = await apiClient.get(`/archive/public/${id}`);
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
export const fetchPublicArchives = async ({ pageParam = 1 }) => {
  const limit = 6;
  try {
    const response = await apiClient.get('/archive/public', {
      params: {
        limit,
        currentPage: pageParam,
      },
    });
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

export const postArchive = async (data: PostArchiveProps) => {
  const response = await apiClient.post('/archive', data);
  return response.data;
};
export const addArchiveLike = async (id: number) => {
  const response = await apiClient.post(`/likse/archive/${id}`);
  return response.data;
};
export const addArchiveComment = async ({
  archive_id,
  content,
  created_at,
  user_id,
}: AddComment) => {
  const response = await apiClient.post(`/archive/comment/${archive_id}`, {
    content,
    created_at,
    user_id,
  });
  return response.data;
  //TODO: 서버 API 확정되면 엔드포인트 수정
};

export const editArchive = async (data: EditArchiveProps) => {
  const response = await apiClient.put(`/archive/${data.id}`, data.archiveData);
  return response.data;
};
export const editArchiveComment = async (comment: Comment) => {
  const response = await apiClient.put(
    `/archive/comment/${comment.commentId}`,
    comment,
  );
  return response.data;
  //TODO: 서버 API 확정되면 엔드포인트 수정
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

export const deleteArchiveComment = async (id: number) => {
  const response = await apiClient.delete(`/archive/comment/${id}`);
  return response.data;
  //TODO: 서버 API 확정되면 엔드포인트 수정
};
