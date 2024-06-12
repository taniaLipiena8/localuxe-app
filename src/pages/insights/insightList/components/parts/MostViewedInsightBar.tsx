/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";
import React from "react";
import SideInsightCard from "../cards/SideInsightCard";
import useGetMostViewedInsight from "../../../../../services/useGetMostViewedInsight";

const MostViewedInsightBar: React.FC = () => {
  const { mostViewedInsight: mostViewed } = useGetMostViewedInsight();
  return (
    <Stack bgcolor={"#F8DAD9"} spacing={2} width={"fit-content"} padding={4}>
      <Typography fontSize={18} fontWeight={700} color={"#674342"}>
        MOST VIEWED
      </Typography>
      {mostViewed.slice(0, 2).map((insight) => (
        <SideInsightCard insight={insight} key={insight.id} />
      ))}
    </Stack>
  );
};

export default MostViewedInsightBar;
