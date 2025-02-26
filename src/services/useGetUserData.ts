/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { AxiosResponse } from "axios";
import { LoggedUser } from "../models/UserModel";

const useGetUserData = () => {
  
  const [userData, setData] = useState<LoggedUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const axiosAuth = useAxiosAuth();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const response: AxiosResponse = await axiosAuth.get("/user_data");
      const responseData: LoggedUser = {
        userId: response.data.data.id,
        email: response.data.data.email_pengguna,
        gambarProfile: response.data.data.gambar_pengguna,
        gender: response.data.data.gender,
        namaLengkap: response.data.data.nama_lengkap,
        nomorTelepon: response.data.data.nomor_telepon,
        userName: response.data.data.nama_pengguna,
      };
      setData(responseData);
    } catch (error: any) {
      setData(null);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { userData, loading, errorMessage , getUserData};
};

export default useGetUserData;
