import axios from 'axios';
import { snakeToCamel } from '../utils/snakeToCamel';
import apiClient from './apiClient';
import { notify } from '../components/common/toast';

export const getSchedule = async (date: string) => {
  try {
    const response = await apiClient.get(`/schedules/${date}`);
    return snakeToCamel(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        notify('error');
      } else {
        notify('error');
      }
    }
  }
};
