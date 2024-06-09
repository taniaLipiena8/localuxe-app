import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axiosClient from "../services/AxiosClient";

const useRefreshAuth = () => {
  const { setToken } = useContext(AuthContext);

  const refreshAuth = async () => {
    const response = await axiosClient.get("/get_token", {
      withCredentials: true,
    });
    setToken(response.data.data.access_token);
    return response.data.data.access_token;
  };
  return refreshAuth;
};

export default useRefreshAuth;
