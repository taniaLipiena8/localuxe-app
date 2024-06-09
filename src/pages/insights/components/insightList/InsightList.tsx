import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InsightCard from "../cards/InsightCard";
import { AxiosResponse } from "axios";
import axiosClient from "../../../../services/AxiosClient";
import {
  InsightListPack,
  InsightListRecord,
} from "../../../../models/InsightListModel";

const InsightList: React.FC = () => {
  const [insightList, setInsightList] = useState<InsightListRecord[]>([]);

  const getInsight = async () => {
    try {
      const response: AxiosResponse = await axiosClient.get(
        "/insights?page=1&limit=6"
      );

      const responseData = new InsightListPack(response.data);
      setInsightList(responseData.data.insights)
      console.log(responseData.data.insights);
    } catch (error) {
      console.log("Product Error", error);
    }
  };

  useEffect(() => {
    getInsight();
  },[]);
  return (
    <Stack width={"100%"} bgcolor={"#F8DAD9"} paddingY={3} paddingX={6} spacing={2}>
      <Typography fontSize={18} fontWeight={700} color={"#674342"} >
        ARTICLES
      </Typography>
      {insightList.map((insight) => (
        <InsightCard insight={insight} />
      ))}
    </Stack>
  );
};

export default InsightList;
