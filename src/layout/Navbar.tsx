import { AccountCircle, PersonOutline } from "@mui/icons-material";
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import VisitorButtons from "./components/VisitorButtons";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Container fixed maxWidth={"xl"}>
        <Box
          minHeight={60}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={2} alignItems={"center"} width={"35%"}>
            <Box paddingRight={3}>
              <Typography
                fontSize={"30px"}
                color={theme.palette.background.default}
                sx={{ cursor: "pointer" }}
              >
                LOCALUXE
              </Typography>
            </Box>
            <Typography
              color={theme.palette.background.default}
              sx={{ cursor: "pointer" }}
            >
              Wanita
            </Typography>
            <Typography
              color={theme.palette.background.default}
              sx={{ cursor: "pointer" }}
            >
              Pria
            </Typography>
            <Typography
              color={theme.palette.background.default}
              sx={{ cursor: "pointer" }}
            >
              Anak
            </Typography>
            <Typography
              color={theme.palette.background.default}
              sx={{ cursor: "pointer" }}
            >
              Brands
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            width={"25%"}
          >
            <TextField
              size="small"
              placeholder="Search"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: { height: "36px" },
              }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} width={"25%"}>
            <VisitorButtons />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
