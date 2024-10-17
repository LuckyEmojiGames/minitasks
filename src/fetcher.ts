// Create an Axios instance
import axios from "axios";
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const { initDataRaw } = retrieveLaunchParams();

const baseBackendURL =  import.meta.env.VITE_BASE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: baseBackendURL,
   headers: {
    'ngrok-skip-browser-warning': '694210',
  }
});

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `tma ${initDataRaw}`;
    console.log(initDataRaw);
    return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;