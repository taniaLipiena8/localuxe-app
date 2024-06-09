import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  index: number;
}

const BrandCard: React.FC<Props> = () => {
  return (
    <Stack
      direction={"column"}
      height={"100%"}
      width={"100%"}
      justifyContent={"center"}
    >
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Box
          component="img"
          sx={{
            width: "60%",
            height: "auto",
          }}
          alt="brand image."
          src="/placeholderImage.png"
        />
      </Stack>
      <Typography
        color={"#674342"}
        fontSize={20}
        fontWeight={400}
        textAlign={"center"}
      >
        The Executives
      </Typography>
    </Stack>
  );
};

export default BrandCard;
