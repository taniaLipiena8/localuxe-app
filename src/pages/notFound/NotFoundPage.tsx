import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign={"center"} paddingY={2} width={"100%"}>
      <Stack direction={"column"} alignItems={"center"} gap={3}>
        <WarningAmberIcon fontSize="large" />
        <Typography fontSize={"20px"} fontWeight={"semibold"}>
          Halaman yang anda tuju tidak ditemukan
        </Typography>
        <Button
          variant={"contained"}
          onClick={() => navigate("/")}
          sx={{
            color: "white",
          }}
        >
          Kembali ke Homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
