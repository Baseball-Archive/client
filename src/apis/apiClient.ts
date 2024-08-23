import axios from 'axios';
import { getToken } from '../store/authStore';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = (() => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(async (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return instance;
})();

export default apiClient;
