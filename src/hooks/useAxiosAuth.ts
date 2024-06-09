import { useContext, useEffect } from "react";
import useRefreshAuth from "./useRefreshAuth";
import AuthContext from "../context/AuthProvider";
import axiosAuth from "../services/AxiosAuth";
import { jwtDecode } from "jwt-decode";

const useAxiosAuth = () => {
  const refreshAuth = useRefreshAuth();
  const { token, exp, setExp } = useContext(AuthContext);
  console.log("token dari useaxios", token);

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      async (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        } 

        return config;
      },
      (error) => {
        console.log("ini di intercept request");
        Promise.reject(error);
      }
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshAuth();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [token, refreshAuth]);

  return axiosAuth;
};

export default useAxiosAuth;
