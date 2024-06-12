/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";
import React from "react";
import SideInsightCard from "../cards/SideInsightCard";
import useGetRandomInsights from "../../../../../services/useGetRandomInsights";

const RandomInsightBar: React.FC = () => {
  const { randomInsightData: randomInsight } = useGetRandomInsights();

  return (
    <Stack bgcolor={"#F8DAD9"} spacing={2} width={"fit-content"} padding={4}>
      <Typography fontSize={18} fontWeight={700} color={"#674342"}>
        OTHER ARTICLES
      </Typography>
      {randomInsight.slice(0, 2).map((insight) => (
        <SideInsightCard insight={insight} key={insight.id} />
      ))}
    </Stack>
  );
};

export default RandomInsightBar;
