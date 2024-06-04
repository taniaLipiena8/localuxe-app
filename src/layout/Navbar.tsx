import { Box, Container, Link, Typography} from "@mui/material";
import React from "react";
import VisitorButtons from "./components/VisitorButtons";

const Navbar: React.FC = () => {

  return (
    <Box bgcolor="#F8DAD9" sx={{ position: "sticky", top: 0, zIndex: 1022 }}>
      <Container fixed maxWidth={"xl"}>
        <Box
          minHeight={60}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box paddingRight={6}>
            <Link href="/" underline="none">
              <Typography
                color={"#674342"}
                sx={{ cursor: "pointer" }}
                fontSize={"30px"}
              >
                LOCALUXE
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} gap={7} justifyContent={"center"} paddingX={7}>
            <Link href="/insights" underline="none">
              <Typography
                color={"#674342"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline ",
                  },
                }}
              >
                INSIGHTS
              </Typography>
            </Link>
            <Link href="/brands" underline="none">
              <Typography
                color={"#674342"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline ",
                  },
                }}
              >
                BRANDS
              </Typography>
            </Link>
            <Link href="/game" underline="none">
              <Typography
                color={"#674342"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline ",
                  },
                }}
              >
                GAME
              </Typography>
            </Link>
            <Link href="/tukar-poin" underline="none">
              <Typography
                color={"#674342"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline ",
                  },
                }}
              >
                TUKAR POIN
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} paddingLeft={6}>
            <VisitorButtons />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
