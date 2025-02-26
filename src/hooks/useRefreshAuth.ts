import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axiosClient from "../services/AxiosClient";

const useRefreshAuth = () => {
  const { setAuth, setToken } =
    useContext(AuthContext);

  const persistRefresh = localStorage.getItem("refreshToken");
  const handleLogout = () => {
    setToken(null);
    setAuth(null);

    localStorage.removeItem("auth");
    localStorage.removeItem("refreshToken");
  };

  const refreshAuth = async () => {
    try {
      const body = {
        refresh_token: persistRefresh,
      };
      const response = await axiosClient.post("/get_token", body, {
        withCredentials: true,
      });
      setToken(response.data.data.access_token);
      return response.data.data.access_token;
    } catch (error) {
      console.log("error in refresh token");
      handleLogout();
    }
  };
  return refreshAuth;
};

export default useRefreshAuth;
