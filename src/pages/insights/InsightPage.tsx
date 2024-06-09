import { Stack } from "@mui/material";
import React from "react";
import RandomInsightBar from "./components/insightList/RandomInsightBar";
import MostViewedInsightBar from "./components/insightList/MostViewedInsightBar";
import InsightList from "./components/insightList/InsightList";

const InsightPage: React.FC = () => {
  return (
    <Stack paddingX={30} spacing={1.5} direction={"row"}>
      <InsightList />
      <Stack direction={"column"} spacing={1.5}>
        <RandomInsightBar />
        <MostViewedInsightBar />
      </Stack>
    </Stack>
  );
};

export default InsightPage;
