import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer: React.FC = () => {
  const handleClick = (url: string | undefined) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box bgcolor="#F8DAD9" padding={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5 }}>
        <Grid item xs={4} textAlign={"center"}>
          <img
            src="/Logo_Localuxe.png"
            alt="Logo Localuxe"
            width="40%"
            style={{ objectFit: "cover" }}
            height="100%"
          />
        </Grid>
        <Grid item xs={4} textAlign={"center"}>
          <Stack
            flexDirection={"column"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Typography fontSize={24} fontWeight={700} color={"#674342"}>
              Our Social Media
            </Typography>
            <Stack flexDirection={"row"} gap={3}>
              <IconButton
                sx={{ color: "#674342" }}
                onClick={() => {
                  handleClick(
                    ""
                  );
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                sx={{ color: "#674342" }}
                onClick={() => {
                  handleClick("");
                }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                sx={{ color: "#674342" }}
                onClick={() => {
                  handleClick("");
                }}
              >
                <XIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4} textAlign={"center"}>
          <Stack
            flexDirection={"column"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            // gap={2}
          >
            <Stack
              flexDirection={"column"}
              height={"100%"}
              textAlign={"left"}
              justifyContent={"center"}
              // gap={2}
            >
              <Typography
                fontSize={24}
                fontWeight={700}
                color={"#674342"}
                marginBottom={1}
              >
                Contact Us:
              </Typography>
              <Stack flexDirection={"column"} gap={0.5}>
                <Typography fontSize={20} fontWeight={700} color={"#674342"}>
                  +62 0812 3456 7890
                </Typography>
                <Typography fontSize={20} fontWeight={700} color={"#674342"}>
                  localuxe.online@gmail.com
                </Typography>
                <Typography fontSize={20} fontWeight={700} color={"#674342"}>
                  Jl Localuxe no 08
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
