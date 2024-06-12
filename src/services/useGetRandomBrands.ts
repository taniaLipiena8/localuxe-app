/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BrandListPack, BrandRecord } from "../models/BrandsModel";
import { AxiosResponse } from "axios";
import axiosClient from "./AxiosClient";

const useGetRandomBrands = () => {
  const [randomBrands, setData] = useState<BrandRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getRandomBrands();
  }, []);

  const getRandomBrands = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);

      const response: AxiosResponse = await axiosClient.get("/random_brands");
      const responseData = new BrandListPack(response.data);

      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };
  return {randomBrands, loading, errorMessage};
};

export default useGetRandomBrands;
