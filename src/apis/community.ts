import axios from 'axios';
import apiClient, { getAuthToken } from './apiClient';
import { showToast } from '../components/common/toast';

export interface CommunityData {
  scheduleId: number;
  title: string;
  content: string;
  picUrl?: string;
  date?: string;
}

export const postCommunity = async (data: CommunityData) => {
  try {
    const response = await apiClient.post('/board', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        showToast(
          '게시글 등록에 실패했습니다. 잠시 후 다시 시도해주세요.',
          'error',
        );
      } else {
        showToast('서버와의 연결이 원활하지 않습니다.', 'error');
      }
    }
    return;
  }
};

export const getCommunity = async () => {
  try {
    const response = await apiClient.get('/board?limit=30&currentPage=1');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        showToast('게시글 조회에 실패했습니다.', 'error');
      } else {
        showToast('서버와의 연결이 원활하지 않습니다.', 'error');
      }
    }
    return [];
  }
};

export const getCommunityDetail = async (id: string) => {
  try {
    const response = await apiClient.get(`/board/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        showToast('게시글 조회에 실패했습니다.', 'error');
      } else {
        showToast('서버와의 연결이 원활하지 않습니다.', 'error');
      }
    }
    return {};
  }
};

export const deleteCommunity = async (id: string) => {
  try {
    const response = await apiClient.delete(`/board/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        showToast('게시글 삭제에 실패했습니다.', 'error');
      } else {
        showToast('서버와의 연결이 원활하지 않습니다.', 'error');
      }
    }
    return;
  }
};

export const updateCommunity = async (id: number, data: CommunityData) => {
  try {
    const response = await apiClient.put(`/board/${id}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        showToast('게시글 수정에 실패했습니다.', 'error');
      } else {
        showToast('서버와의 연결이 원활하지 않습니다.', 'error');
      }
    }
    return;
  }
};
