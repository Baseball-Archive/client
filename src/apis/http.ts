// import axios, { AxiosRequestConfig } from 'axios';
// import { getToken, removeToken } from '../store/authStore';
// import { firebaseConfig } from '../service/firebase';

// const DEFAULT_TIMEOUT = 30000;

// // HTTP 메서드 타입 정의
// type requestMethod = 'get' | 'post' | 'put' | 'delete';

// export const createClient = (config?: AxiosRequestConfig) => {
//   const headers: Record<string, string> = {
//     'Content-Type': 'application/json',
//   };

//   const token = getToken();
//   if (token) {
//     headers['Authorization'] = token;
//   }

//   const axiosInstance = axios.create({
//     baseURL: firebaseConfig.databaseURL,
//     timeout: DEFAULT_TIMEOUT,
//     headers,
//     withCredentials: true,
//     ...config,
//   });

//   axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         removeToken();
//         window.location.href = 'users/login';
//       }
//       return Promise.reject(error);
//     },
//   );

//   return axiosInstance;
// };

// export const httpClient = createClient();

// export const requestHandler = async <T>(
//   method: requestMethod,
//   url: string,
//   payload?: T,
// ) => {
//   const response = await httpClient.request({
//     method,
//     url,
//     data: payload,
//   });
//   return response.data;
// };
