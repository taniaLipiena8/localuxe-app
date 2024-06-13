/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import axiosClient from "../../../services/AxiosClient";

const useGetUserPoint = () => {
  const [userPoint, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      getUserPoint();
    } else {
      setData(null);
    }
  }, [userId]);

  const getUserPoint = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const queryParam = {
        user_id: userId,
      };

      const response: AxiosResponse = await axiosClient.get(`/user_point`, {
        params: queryParam,
      });

      setData(response.data.data.jumlah_poin);
    } catch (error: any) {
      setData(null);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };
  return { getUserPoint, userPoint, loading, errorMessage };
};

export default useGetUserPoint;
