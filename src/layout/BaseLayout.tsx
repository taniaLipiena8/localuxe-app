import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BaseLayout: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Stack
        sx={{
          flex: 1,
          backgroundColor: theme.palette.background.default,
          pb: 5,
          pt:2
        }}
      >
        <Outlet />
      </Stack>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
