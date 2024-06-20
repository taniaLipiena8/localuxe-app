/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BrandListPack, BrandRecord } from "../../../models/BrandsModel";
import { AxiosResponse } from "axios";
import axiosClient from "../../../services/AxiosClient";

export type AdjustedBrandList = {
  group: string;
  children: BrandRecord[];
};

const useGetBrandsList = () => {
  const [adjustedBrandList, setData] = useState<AdjustedBrandList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getAdjustedBrandList();
  }, []);

  const getAdjustedBrandList = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);

      const response: AxiosResponse = await axiosClient.get("/brands");
      const responseData = new BrandListPack(response.data);

      const result: AdjustedBrandList[] = responseData.data.reduce(
        (words: any, brand: BrandRecord) => {
          // get first letter of name of current element
          const group = brand.namaMerek[0];
          // if there is no property in accumulator with this letter create it
          if (!words[group]) {
            words[group] = { group, children: [brand] };
            // if there is push current element to children array for that letter
          } else words[group].children.push(brand);
          
          return words;
        },
        {}
      );

      setData(Object.values(result));
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { adjustedBrandList, loading, errorMessage };
};

export default useGetBrandsList;
