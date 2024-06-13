/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosClient from "../../../services/AxiosClient";
import { HistoryVoucherData, HistoryVoucherListPack } from "../models/HistoryVoucherModel";

const useGetHistoryVoucher = () => {
  const [historyVouchers, setData] = useState<HistoryVoucherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      getHistoryVoucher();
    } else {
      setData([]);
    }
  }, [userId]);


  const getHistoryVoucher = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const queryParam = {
        user_id: userId,
      };

      const response: AxiosResponse = await axiosClient.get("/history_voucher", {
        params: queryParam,
      });

      const responseData = new HistoryVoucherListPack(response.data);

      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };
  return { getHistoryVoucher, historyVouchers, loading, errorMessage };
};

export default useGetHistoryVoucher;
