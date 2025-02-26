/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { InsightListRecord } from "../models/InsightListModel";
import { AxiosResponse } from "axios";
import axiosClient from "./AxiosClient";
import { RandomInsightListPack } from "../models/RandomInsightListModel";

const useGetRandomInsights = () => {
  const [randomInsightData, setData] = useState<InsightListRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getInsight();
  }, []);

  const getInsight = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const response: AxiosResponse = await axiosClient.get("/random_insights");
      const responseData = new RandomInsightListPack(response.data);
      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { randomInsightData, loading, errorMessage };
};

export default useGetRandomInsights;
