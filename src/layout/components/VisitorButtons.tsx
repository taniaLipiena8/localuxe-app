import { Box, Button, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const VisitorButtons = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      }}
      gap={3}
    >
      <ShoppingCartIcon
        sx={{ color: theme.palette.background.default, cursor: "pointer" }}
        fontSize="large"
      />
      <Button
        fullWidth
        variant="contained"
        sx={{
          height: "36px",
          minWidth: "80px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.dark,
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            color: theme.palette.background.default,
          },
        }}
      >
        Log In
      </Button>
      <Button
        fullWidth
        variant="contained"
        sx={{
          height: "36px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.dark,
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            color: theme.palette.background.default,
            backgroundColor: "#964A52",
          },
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default VisitorButtons;
