/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { VoucherListPack, VoucherListRecord } from "../models/VoucherModel";
import { AxiosResponse } from "axios";
import axiosClient from "../../../services/AxiosClient";

const useGetVouchers = () => {
  const [voucherList, setData] = useState<VoucherListRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    getVoucherList();
  }, [mounted]);

  const getVoucherList = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);

      const response: AxiosResponse = await axiosClient.get("/vouchers");
      const responseData = new VoucherListPack(response.data);

      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { getVoucherList, voucherList, loading, errorMessage };
};

export default useGetVouchers;
