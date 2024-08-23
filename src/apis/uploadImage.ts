import apiClient from './apiClient';

export const uploadImage = async (data: FormData) => {
  try {
    const response = await apiClient.post('/upload', data);
    return response.data;
  } catch (error) {
    console.error('이미지 업로드 실패: ', error);
    throw new Error(`이미지 업로드 실패:  ${error}`);
  }
};
