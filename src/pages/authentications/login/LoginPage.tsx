import {
  Box,
  Button,
  Card,
  Link,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";

const LoginPage: React.FC = () => {
  const form = useForm();

  const rootStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    display: "flex",
    p: 6,
    height: "fit-content",
    width: "400px",
    flexDirection: "column",
    borderRadius: "16px",
    border: "1px solid #674342",
  };

  const logoStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 5,
  };
  return (
    <Stack sx={rootStyle}>
      <Card sx={cardStyle}>
        <Box sx={logoStyle}>
          <Typography color={"#674342"} fontSize={"32px"}>
            Selamat datang di LOCALUXE
          </Typography>
        </Box>
        <FormProvider {...form}>
          <form>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              gap={2}
              marginBottom={6}
            >
              <EmailField />
              <PasswordField />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "100%", mb: 4, color: "white" }}
            >
              Login
            </Button>
          </form>
        </FormProvider>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Typography fontSize={14} fontWeight={400} color={"#674342"}>
            Belum memiliki akun?
          </Typography>
          <Link href="/register" color="inherit" underline="always">
            Register
          </Link>
        </Stack>
      </Card>
    </Stack>
  );
};

export default LoginPage;
