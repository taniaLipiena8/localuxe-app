import axios, { CreateAxiosDefaults } from "axios";

const clientConfig: CreateAxiosDefaults = {
  baseURL:process.env.VITE_LOCALUXE_BASE_API_URL,
};

const axiosClient = axios.create(clientConfig);

export default axiosClient;
