import { isAxiosError } from 'axios';
import { showToast } from '../components/common/Toast';
import { PostComment } from '../types/Comment';
import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient from './apiClient';

// export const getArchiveComments = async (archiveId: string) => {
//   try {
//     const response = await apiClient.get(`/comments/archive/${archiveId}`);
//     console.log(response.data);
//     return snakeToCamel(response.data);
//   } catch (error) {
//     if (isAxiosError(error)) {
//       if (error.response) {
//         showToast(error.response.data.error, 'error');
//       } else {
//         showToast(error.message, 'error');
//       }
//     }
//   }
//   return [];
// };
export const getArchiveComments = async (id: string) => {
  const response = await apiClient.get(`/comments/archive/${id}`);
  return snakeToCamel(response.data);
};

export const editArchiveComment = async ({
  archiveId,
  commentId,
  content,
}: PostComment) => {
  try {
    const response = await apiClient.put(`/comments/archive/${archiveId}`, {
      commentId: commentId,
      content: content,
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

export const addArchiveComment = async ({
  archiveId,
  content,
  createdAt,
  userId,
}: PostComment) => {
  try {
    const response = await apiClient.post(`/comments/archive/${archiveId}`, {
      user_id: userId,
      created_at: createdAt,
      content: content,
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

export const deleteArchiveComment = async ({
  archiveId,
  commentId,
}: PostComment) => {
  try {
    const response = await apiClient.delete(`/comments/archive/${archiveId}`, {
      data: { commentId: commentId },
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

export const getCommunityComments = async (boardId: string) => {
  const response = await apiClient.get(`/comments/board/${boardId}`);
  return snakeToCamel(response.data);
};

export const addCommunityComment = async ({
  boardId,
  content,

  createdAt,
  userId,
}: PostComment) => {
  try {
    const response = await apiClient.post(`/comments/board/${boardId}`, {
      user_id: userId,
      created_at: createdAt,
      content: content,
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
export const editCommunityComment = async ({
  boardId,
  commentId,
  content,
}: PostComment) => {
  try {
    const response = await apiClient.put(`/comments/archive/${boardId}`, {
      commentId: commentId,
      content: content,
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
export const deleteCommunityComment = async ({
  boardId,
  commentId,
}: PostComment) => {
  try {
    const response = await apiClient.delete(`/comments/board/${boardId}`, {
      data: { commentId: commentId },
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
