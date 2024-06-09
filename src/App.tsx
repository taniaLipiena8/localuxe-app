/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/authentications/login/LoginPage";
import RegisterPage from "./pages/authentications/register/RegisterPage";
import BaseLayout from "./layout/BaseLayout";
import InsightPage from "./pages/insights/InsightPage";
import axiosClient from "./services/AxiosClient";
import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosAuth from "./services/AxiosAuth";
import BrandsPage from "./pages/brands/BrandsPage";
import AuthContext from "./context/AuthProvider";

function App() {
  const { exp, token, setExp,  setToken } =
    useContext(AuthContext);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axiosClient.get("/get_token", {withCredentials: true});
  //     setToken(response.data.data.access_token);
  //     const decoded = jwtDecode(response.data.data.access_token);
  //     setExp(decoded.exp);
  //   } catch (error: any) {
  //     if (error.response) {
  //       console.log("error refresh", error);
  //     }
  //   }
  // };

  // axiosAuth.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (exp * 1000 < currentDate.getTime()) {
  //       const response = await axiosClient.get("/get_token");
  //       config.headers.Authorization = `Bearer ${response.data.data.access_token}`;
  //       setToken(response.data.data.access_token);

  //       const decoded = jwtDecode(response.data.data.access_token);
  //       setExp(decoded.exp);
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     console.log("interceptors error");

  //     return Promise.reject(error);
  //   }
  // );

  // const getUser = async () => {
  //   try {
  //     const response = await axiosAuth.get("/user_data", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log("Get user error");
  //   }
  // };

  // useEffect(() => {
  //   refreshToken();
  //   // getUser();
  // }, []);
  return (
    <Routes>
      <Route path="/*" element={<BaseLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="insights" element={<InsightPage />} />
        <Route path="brands" element={<BrandsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
