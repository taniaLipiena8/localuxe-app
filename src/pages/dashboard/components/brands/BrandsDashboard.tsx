import { Stack, Typography, Grid } from "@mui/material";
import React from "react";
import BrandCard from "./BrandCard";

const BrandsDashboard: React.FC = () => {
  return (
    <Stack paddingTop={10} justifyContent="center" width={"100%"} gap={3}>
      <Typography fontSize={24} fontWeight={900} color={"#674342"}>
        BRANDS YOU MIGHT NOT KNOW
      </Typography>
      <Grid container gap={3} justifyContent={"center"}>
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={12} md={2} key={index}>
            <BrandCard index={index} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default BrandsDashboard;
