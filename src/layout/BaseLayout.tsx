import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BaseLayout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Stack
        sx={{
          flex: 1,
          backgroundColor: theme.palette.background.default,
          py: 5,
        }}
      >
        <Outlet />
      </Stack>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
