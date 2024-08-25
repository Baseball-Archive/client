import apiClient from './apiClient';

export const postComment = async (content: string, boardId: string) => {
  const response = await apiClient.post(`/comments/board/${boardId}`, {
    content,
  });
  return response.data;
};

export const updateComment = async (
  content: string,
  commentId: number,
  boardId: string,
) => {
  const response = await apiClient.put(`/comments/board/${boardId}`, {
    content,
    commentId,
  });
  return response.data;
};

export const getComment = async (boardId: string) => {
  const response = await apiClient.get(`/comments/board/${boardId}`);
  return response.data;
};

export const deleteComment = async (commentId: number, boardId: string) => {
  const response = await apiClient.put(`/comments/board/${boardId}`, {
    commentId,
  });
  return response.data;
};
