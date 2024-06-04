import { Box, Stack, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import CarouselDashboard from "./components/Carousel/CarouselDashboard";
import LatestInsight from "./components/insights/LatestInsight";
import BrandsDashboard from "./components/brands/BrandsDashboard";
import AboutLocaluxe from "./components/aboutUs/AboutLocaluxe";
import MostViewedInsights from "./components/insights/MostViewedInsights";
import { AxiosResponse } from "axios";
import axiosClient from "../../services/AxiosClient";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const getInsight = async () => {
    try {
      const response: AxiosResponse = await axiosClient.get(
        "/insights?page=1&limit=10"
      );
      console.log(response);
    } catch (error: any) {
      console.log("Product Error", error);
    }
  };

  useEffect(() => {
    getInsight();
  });

  return (
    <>
      <Stack sx={{ alignItems: "center" }} paddingX={30}>
        <Stack width={"100%"} spacing={4} alignItems="center" paddingX={30}>
          <Box
            sx={{
              width: "100%",
              height: "400px",
              margin: "0 auto",
            }}
            bgcolor={"grey"}
          >
            <CarouselDashboard />
          </Box>
        </Stack>
        <Stack>
          <BrandsDashboard />
        </Stack>
        <Stack
          marginTop={10}
          bgcolor={"#F8DAD9"}
          width={"100%"}
          direction={"row"}
          paddingX={30}
          // height={"100vh"}
        >
          <Stack
            width={"50%"}
            borderRight={1}
            borderColor={theme.palette.primary.main}
          >
            <LatestInsight />
          </Stack>
          <Stack width={"50%"}>
            <MostViewedInsights />
          </Stack>
        </Stack>
        <Stack marginTop={5} paddingX={15}>
          <AboutLocaluxe />
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
