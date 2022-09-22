import axios from 'axios';
import type { AxiosError, AxiosRequestConfig } from 'axios';

import settings from './settings';

export type MockResponseProps<T> = [number | AxiosRequestConfig, T];

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    return {
      ...config,
      baseURL: settings.apiURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  },
  (error) => Promise.reject(error),
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error.response?.data),
);

export default axiosApiInstance;
