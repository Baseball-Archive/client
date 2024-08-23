import axios, { AxiosResponse } from 'axios';
import { auth } from '../service/firebase';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = (() => {
  const getAuthToken = async () => {
    const user = auth.currentUser;
    const token = await user?.getIdToken();
    return `Bearer ${token}`;
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(async (config) => {
    const token = await getAuthToken();
    config.headers.Authorization = token;
    return config;
  });

  return instance;
})();

export default apiClient;
