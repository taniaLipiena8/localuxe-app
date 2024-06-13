/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosClient from "../../../services/AxiosClient";
import {
  ClaimedVoucherData,
  ClaimedVoucherListPack,
} from "../models/ClaimedVoucherModel";

const useGetClaimedVoucher = () => {
  const [claimedVouchers, setData] = useState<ClaimedVoucherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      getClaimedVouchers();
    } else {
      setData([]);
    }
  }, [userId]);


  const getClaimedVouchers = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const queryParam = {
        user_id: userId,
      };

      const response: AxiosResponse = await axiosClient.get("/user_vouchers", {
        params: queryParam,
      });

      const responseData = new ClaimedVoucherListPack(response.data);

      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };
  return { getClaimedVouchers, claimedVouchers, loading, errorMessage };
};

export default useGetClaimedVoucher;
