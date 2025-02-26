import { Stack, Typography } from "@mui/material";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <Stack flexDirection={"row"} gap={10} paddingX={30} alignItems={"center"} paddingY={8}>
      <img
        src="/Logo_Localuxe.png"
        alt="Logo Localuxe"
        width="30%"
        style={{ objectFit: "cover" }}
        height="100%"
      />
      <Stack textAlign={"justify"} gap={3}>
        <Typography color={"#674342"} fontSize={18} fontWeight={400}>
          Welcome to Localuxe! Localuxe is a web application for discovering local fashion
          brands and products. Our web application is dedicated to shining a
          spotlight on local talent and craftmanship through creative articles
          that delve into the latest trends, designer stories, and fashion tips.
          We aim to support local brands by delivering insightful contents that
          highlights the brands and products of local fashion industry.
        </Typography>

        <Typography color={"#674342"} fontSize={18} fontWeight={400}>
          Additionally, our web application features a curated list of local
          fashion brands making it easier for you to explore and connect with
          your favorite local designers. The brands in our list is filtered
          using the official brands data sourced from a government-owned website
          Pangkalan Data Kekayaan Intelektual (PDKI) managed by Direktorat
          Jenderal Kekayaan Intelektual Kemenkumham Indonesia, ensuring that
          every brand featured is official and genuinely local. This
          verification process guarantees that you can trust the authenticity
          and local origin of the brands you explore on our platform.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutUsPage;
