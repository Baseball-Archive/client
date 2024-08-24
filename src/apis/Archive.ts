import axios, { AxiosError } from 'axios';
import { PostArchiveProps } from '../types/Archive';
import { AddComment, Comment } from '../types/Comment';
import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient from './apiClient';
import { showToast } from '../components/common/Toast';

export const getArchives = async () => {
  try {
    const response = await apiClient.get('/archive');
    return snakeToCamel(response.data);
  } catch (error) {
    throw error;
  }
};
export const getArchiveDetailWithComments = async () => {
  const response = await apiClient.get('/archive/detail');
  return snakeToCamel(response.data);
  //TODO: 서버 API 확정되면 엔드포인트 수정
};

export const postArchive = async (data: PostArchiveProps) => {
  const response = await apiClient.post('/archive', data);
  return response.data;
};
export const addArchiveLike = async (id: number) => {
  const response = await apiClient.post(`/archive/like/${id}`);
  return response.data;
  //TODO: 서버 API 확정되면 엔드포인트 수정
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

export const editArchive = async (id: number) => {
  const response = await apiClient.put(`/archive/${id}`);
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
  const response = await apiClient.delete(`/archive/like/${id}`);
  return response.data;
};
export const deleteArchiveComment = async (id: number) => {
  const response = await apiClient.delete(`/archive/comment/${id}`);
  return response.data;
  //TODO: 서버 API 확정되면 엔드포인트 수정
};
