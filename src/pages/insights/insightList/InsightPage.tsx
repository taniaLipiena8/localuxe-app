import { Stack } from "@mui/material";
import React from "react";
import InsightList from "./components/parts/InsightList";
import MostViewedInsightBar from "./components/parts/MostViewedInsightBar";
import RandomInsightBar from "./components/parts/RandomInsightBar";

const InsightPage: React.FC = () => {
  return (
    <Stack paddingX={30} spacing={2} direction={"row"}>
      <InsightList />
      <Stack direction={"column"} spacing={3}>
        <RandomInsightBar />
        <MostViewedInsightBar />
      </Stack>
    </Stack>
  );
};

export default InsightPage;
