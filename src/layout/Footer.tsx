import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="#F8DAD9" padding={2}>
      <Box height={"20px"}></Box>
      <Divider sx={{ borderColor: "#674342" }} />
      <Typography color={"#674342"} fontSize={16} marginTop={1}>
        © 2024 LOCALUXE
      </Typography>
    </Box>
  );
};

export default Footer;
