/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { LatestInsightPack } from "../models/LatestInsightsModel";
import axiosClient from "./AxiosClient";
import { useEffect, useState } from "react";
import { InsightListRecord } from "../models/InsightListModel";

const useGetLatestInsight = () => {
  const [latestInsight, setData] = useState<InsightListRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getInsight();
  }, []);

  const getInsight = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const response: AxiosResponse = await axiosClient.get("/latest");
      const responseData = new LatestInsightPack(response.data);
      setData(responseData.data);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return {latestInsight, loading, errorMessage};
};

export default useGetLatestInsight;
