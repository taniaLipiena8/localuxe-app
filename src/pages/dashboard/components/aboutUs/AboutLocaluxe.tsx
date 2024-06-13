import { Button, Stack, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthProvider";

const AboutLocaluxe: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  function handleJoinUs() {
    navigate({
      pathname: "/register",
    });
  }

  return (
    <Stack gap={5} alignItems={"center"} flexDirection={"row"}>
      <img
        src="/Logo_Localuxe.png"
        alt="Logo Localuxe"
        width="30%"
        style={{ objectFit: "cover" }}
        height="100%"
      />
      <Stack alignItems={"center"} gap={3}>
        <Typography color={"#674342"} fontSize={18} fontWeight={400}>
          Welcome to Localuxe, a web application for discovering local fashion
          brands and products. We are dedicated in shining a spotlight and
          supporting local talent and craftmanship. Join us and uncover the
          latest updates, news, trends of local brands.
        </Typography>
        {!auth && (
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
        )}
      </Stack>
    </Stack>
  );
};

export default AboutLocaluxe;
