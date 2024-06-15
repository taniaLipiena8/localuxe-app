/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  InsightDetailData,
  InsightDetailPack,
} from "../../../../models/InsightDetailModel";
import { AxiosResponse } from "axios";
import axiosClient from "../../../../services/AxiosClient";

type Param = {
  insightId: number | null;
};

const useGetDetailInsight = ({ insightId }: Param) => {
  const [detailInsightData, setData] = useState<InsightDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (insightId) {
      getDetailInsight();
    } else {
      setData(null);
    }
  }, [insightId, ]);

  const getDetailInsight = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);

      const response: AxiosResponse = await axiosClient.get(
        `/insights/${insightId}`
      );

      const result = new InsightDetailPack(response.data);
      console.log(result);

      setData(result.data);
    } catch (error: any) {
      setData(null);
      setErrorMessage(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return {detailInsightData, loading, errorMessage};
};

export default useGetDetailInsight;
