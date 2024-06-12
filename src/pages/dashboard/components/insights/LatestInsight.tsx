/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack, Typography } from "@mui/material";
import React from "react";
import DashboardInsightCard from "./DashboardInsightCard";
import useGetLatestInsight from "../../../../services/useGetLatestInsight";

const LatestInsight: React.FC = () => {
  const { latestInsight } = useGetLatestInsight();
  return (
    <Stack spacing={3} paddingRight={5} paddingTop={3} paddingBottom={5}>
      <Typography
        fontSize={32}
        color={"#674342"}
        textAlign={"left"}
        borderBottom={1}
        borderColor={"#674342"}
      >
        Latest Articles
      </Typography>
      <Stack spacing={3}>
        {latestInsight.map((insight) => (
          <DashboardInsightCard insightData={insight} key={insight.id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default LatestInsight;
