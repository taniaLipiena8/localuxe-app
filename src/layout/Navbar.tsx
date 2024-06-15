import { Box, Button, Container, Link, Tooltip } from "@mui/material";
import React, { useContext, useState } from "react";
import VisitorButtons from "./components/VisitorButtons";
import LoggedUserButtons from "./components/LoggedUserButtons";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openGame, setOpenGame] = useState(false);
  const [openPoin, setOpenPoin] = useState(false);

  const handleClickPrivatePage = (url: string) => {
    if (!auth) {
      switch (url) {
        case "game":
          setOpenGame(true);
          break;
        case "tukar-poin":
          setOpenPoin(true);
          break;
      }
    } else navigate(`/${url}`);
  };

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
            <img
              height={"40px"}
              width="auto"
              style={{ objectFit: "cover" }}
              src="LocaluxeNavbar_1.png"
              onClick={()=> navigate(`/`)}
            />
          </Box>
          <Box display={"flex"} gap={7} justifyContent={"center"} paddingX={7}>
            <Button
              variant="text"
              onClick={() => navigate("/insights")}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline ",
                },
                color: "#674342",
                fontSize: "16px",
              }}
            >
              INSIGHTS
            </Button>
            <Button
              variant="text"
              onClick={() => navigate("/brands")}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline ",
                },
                color: "#674342",
                fontSize: "16px",
              }}
            >
              BRANDS
            </Button>
            <Tooltip
              arrow
              open={openGame}
              onClose={() => setOpenGame(false)}
              title="Mohon login terlebih dahulu"
            >
              <Button
                variant="text"
                onClick={() => handleClickPrivatePage("game")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline ",
                  },
                  color: "#674342",
                  fontSize: "16px",
                }}
              >
                GAME
              </Button>
            </Tooltip>

            <Tooltip
              arrow
              open={openPoin}
              onClose={() => setOpenPoin(false)}
              title="Mohon login terlebih dahulu"
            >
              <Button
                variant="text"
                onClick={() => handleClickPrivatePage("tukar-poin")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline ",
                  },
                  color: "#674342",
                  fontSize: "16px",
                }}
              >
                TUKAR POIN
              </Button>
            </Tooltip>
          </Box>
          <Box display={"flex"} alignItems={"center"} paddingLeft={6}>
            {!auth ? <VisitorButtons /> : <LoggedUserButtons />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
