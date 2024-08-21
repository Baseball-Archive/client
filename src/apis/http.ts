import axios, { AxiosRequestConfig } from 'axios';
import { getToken, removeToken } from '../store/authStore';
import ROUTES from '../constants/router';


export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken() || '',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        removeToken();
        window.location.href = ROUTES.LOGIN;
        return;
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const httpClient = createClient();

// 공통 요청 부분
type requestMethod = 'get' | 'post' | 'put' | 'delete';
export const requestHandler = async <T>(
  method: requestMethod,
  url: string,
  payload?: T,
) => {
  const response = await httpClient.request({
    method,
    url,
    data: payload,
  });

  return response.data;
};
