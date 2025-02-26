/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";
import React from "react";
import SideInsightCard from "../cards/SideInsightCard";
import useGetMostViewedInsight from "../../../../../services/useGetMostViewedInsight";
import SkeletonSideInsight from "../cards/SkeletonSideInsight";

const MostViewedInsightBar: React.FC = () => {
  const { mostViewedInsight: mostViewed, loading } = useGetMostViewedInsight();
  return (
    <Stack bgcolor={"#F8DAD9"} spacing={2} width={"fit-content"} padding={4}>
      <Typography fontSize={18} fontWeight={700} color={"#674342"}>
        MOST VIEWED
      </Typography>
      {loading ? (
        <>
          {Array.from(Array(2)).map((_, index) => (
            <SkeletonSideInsight key={index} />
          ))}
        </>
      ) : (
        <>
          {mostViewed.slice(0, 3).map((insight) => (
            <SideInsightCard insight={insight} key={insight.id} />
          ))}
        </>
      )}
    </Stack>
  );
};

export default MostViewedInsightBar;
