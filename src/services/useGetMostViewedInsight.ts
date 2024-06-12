/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { InsightListRecord } from "../models/InsightListModel";
import { AxiosResponse } from "axios";
import axiosClient from "./AxiosClient";
import { MostViewedInsightPack } from "../models/MostViewedInsightsModel";

const useGetMostViewedInsight = () => {
  const [mostViewedInsight, setData] = useState<InsightListRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getInsight();
  }, []);

  const getInsight = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const response: AxiosResponse = await axiosClient.get("/most_viewed");
      const responseData = new MostViewedInsightPack(response.data);
      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return { mostViewedInsight, loading, errorMessage };
};

export default useGetMostViewedInsight;
