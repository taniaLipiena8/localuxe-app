import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarLayout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Stack
        sx={{
          flex: 1,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Outlet />
      </Stack>
    </Box>
  );
};

export default NavbarLayout;
