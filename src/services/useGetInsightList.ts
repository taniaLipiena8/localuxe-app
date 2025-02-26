/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import axiosClient from "./AxiosClient";
import { InsightListPack, InsightListRecord } from "../models/InsightListModel";

type Params = {
  currPage: number | null;
  search: URLSearchParams;
};

const useGetInsightList = ({ currPage, search }: Params) => {
  const [insightListData, setData] = useState<InsightListRecord[]>([]);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (currPage && currPage! > 0) {
      getInsight();
    }
  }, [currPage, search]);

  const getInsight = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const queryParam = {
        search_param: search.toString()
          ? search.toString().split("=")[1].trim()
          : "",
      };

      const response: AxiosResponse = await axiosClient.get(
        `/insights?page=${currPage}&limit=6`,
        { params: queryParam }
      );

      const responseData = new InsightListPack(response.data);
      setTotalPage(responseData.data.totalPage);
      setData(responseData.data.insights);
    } catch (error: any) {
      setData([]);
      setTotalPage(1);
      setErrorMessage(error.response.data.message);
    }
    finally{
        setLoading(false)
    }
  };
  return { insightListData, totalPage, loading, errorMessage };
};

export default useGetInsightList;
