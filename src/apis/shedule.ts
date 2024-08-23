import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient from './apiClient';

export const getSchedule = async (date: string) => {
  try {
    const response = await apiClient.get(`/schedules/${date}`);
    return snakeToCamel(response.data);
  } catch (error) {
    console.error(error);
    throw new Error('에러 발생');
  }
};
