import { Stack, Typography } from "@mui/material";
import React from "react";
import DashboardInsightCard from "./DashboardInsightCard";

const MostViewedInsights: React.FC = () => {
  return (
    <Stack spacing={3} paddingLeft={5} paddingTop={3} paddingBottom={5}>
      <Typography
        fontSize={32}
        color={"#674342"}
        fontWeight={600}
        textAlign={"left"}
        borderBottom={1}
        borderColor={"#674342"}
      >
        Most Viewed Articles
      </Typography>
      <Stack spacing={3}>
        {Array.from(Array(4)).map((_, index) => (
          <DashboardInsightCard />
        ))}
      </Stack>
    </Stack>
  );
};

export default MostViewedInsights;
