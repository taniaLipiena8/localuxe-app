import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutLocaluxe: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleJoinUs() {
    navigate({
      pathname: "/register",
    });
  }
  return (
    <Stack gap={3} alignItems={"center"}>
      <Typography color={"#674342"} fontSize={30} fontWeight={400}>
        LOCALUXE
      </Typography>
      <Typography color={"#674342"} fontSize={18} fontWeight={400}>
        Welcome to Localuxe, a web application for discovering local fashion
        brands and products. We are dedicated in shining a spotlight and
        supporting local talent and craftmanship. Join us and uncover the latest
        updates, news, trends of local brands.
      </Typography>

      <Button
        variant="outlined"
        onClick={handleJoinUs}
        sx={{
          height: "36px",
          width: "30%",
          borderColor: "#674342",
          color: "#674342",
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.background.default,
          },
        }}
      >
        JOIN US
      </Button>
    </Stack>
  );
};

export default AboutLocaluxe;
