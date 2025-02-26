import { Stack, Typography, Grid } from "@mui/material";
import React from "react";
import BrandCard from "./BrandCard";
import useGetRandomBrands from "../../../../services/useGetRandomBrands";

const BrandsDashboard: React.FC = () => {
  const { randomBrands } = useGetRandomBrands();

  return (
    <Stack paddingTop={10} justifyContent="center" width={"100%"} gap={3}>
      <Typography
        fontSize={32}
        color={"#674342"}
        borderBottom={1}
        borderColor={"#674342"}
      >
        BRANDS YOU MIGHT NOT KNOW
      </Typography>
      <Grid container gap={3} justifyContent={"center"}>
        {randomBrands.map((brand, index) => (
          <Grid item xs={12} md={2} key={index} >
            <BrandCard brand={brand} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default BrandsDashboard;
