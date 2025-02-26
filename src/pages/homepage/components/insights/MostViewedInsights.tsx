/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack, Typography } from "@mui/material";
import React from "react";
import DashboardInsightCard from "./HomepageInsightCard";
import useGetMostViewedInsight from "../../../../services/useGetMostViewedInsight";

const MostViewedInsights: React.FC = () => {
  const { mostViewedInsight: mostViewed } = useGetMostViewedInsight();

  return (
    <Stack spacing={3} paddingLeft={5} paddingTop={3} paddingBottom={5}>
      <Typography
        fontSize={32}
        color={"#674342"}
        textAlign={"left"}
        borderBottom={1}
        borderColor={"#674342"}
      >
        Most Viewed Articles
      </Typography>
      <Stack spacing={3}>
        {mostViewed.map((insight) => (
          <DashboardInsightCard insightData={insight} key={insight.id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MostViewedInsights;
