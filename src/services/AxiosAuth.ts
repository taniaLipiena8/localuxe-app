import axios, { CreateAxiosDefaults } from "axios";

const clientConfig: CreateAxiosDefaults = {
  baseURL:process.env.VITE_LOCALUXE_BASE_API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
};

const axiosAuth = axios.create(clientConfig);

export default axiosAuth;



