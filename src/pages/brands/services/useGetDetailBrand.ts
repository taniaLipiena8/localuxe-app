/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosClient from "../../../services/AxiosClient";
import { BrandDetailData, BrandDetailPack } from "../../../models/BrandDetailModel";

type Param = {
  brandId: number | null;
};

const useGetDetailBrand = ({ brandId }: Param) => {
  const [detailBrandData, setData] = useState<BrandDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (brandId) {
      getDetailBrand();
    } else {
      setData(null);
    }
  }, [brandId]);

  const getDetailBrand = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);

      const response: AxiosResponse = await axiosClient.get(
        `/brands/${brandId}`
      );

      const result = new BrandDetailPack(response.data);
      console.log(result);

      setData(result.data);
    } catch (error: any) {
      setData(null);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return { detailBrandData, loading, errorMessage };
};

export default useGetDetailBrand;
