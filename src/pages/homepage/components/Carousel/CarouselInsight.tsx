import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useGetRandomInsights from "../../../../services/useGetRandomInsights";
import RandomInsightCard from "./RandomInsightCard";

const CarouselDashboard: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { randomInsightData: randomInsight } = useGetRandomInsights();

  const prevIndex = () => {
    const newIndex = index === 0 ? randomInsight.length- 1 : index - 1;
    setIndex(newIndex);
  };
  const nextIndex = () => {
    const newIndex = index === randomInsight.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };
  const changeIndex = (slideIndex: number) => {
    setIndex(slideIndex);
  };
  console.log(index);

  return (
    randomInsight.length > 0 && (
      <Box
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <Box>
          <ArrowLeft onClick={prevIndex} />
          <ArrowRight onClick={nextIndex} />
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <RandomInsightCard randomInsight={randomInsight[index]}/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {randomInsight.map((_slide, idx) => (
            <Button
              key={idx}
              sx={{
                margin: "0 3px",
                cursor: "pointer",
              }}
              onClick={() => changeIndex(idx)}
            >
              <FiberManualRecordIcon key={idx} fontSize="small" />
            </Button>
          ))}
        </Box>
      </Box>
    )
  );
};

export default CarouselDashboard;
