import axios from 'axios';
import { showToast } from '../components/common/Toast';
import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient from './apiClient';
export const getSchedule = async (date: string) => {
  try {
    const response = await apiClient.get(`/schedules/${date}`);
    return snakeToCamel(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        showToast('해당 날짜의 일정이 없습니다.', 'error');
      } else {
        showToast('서버와의 연결이 원활하지 않습니다.', 'error');
      }
    }
    return [];
  }
};
