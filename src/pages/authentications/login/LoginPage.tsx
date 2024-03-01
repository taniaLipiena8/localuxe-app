import {
  Box,
  Button,
  Card,
  Link,
  Stack,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";

const LoginPage = () => {
  const theme = useTheme();
  const form = useForm();

  const rootStyle = {
    backgroundColor: "#F7E7E7",
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
          <Typography fontSize={"32px"}>Selamat datang di LOCALUXE</Typography>
        </Box>
        <FormProvider {...form}>
          <form>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              gap={2}
            >
              <EmailField />
              <PasswordField />
            </Box>
            <Box
              sx={{
                mb: 6,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="text">Lupa password?</Button>
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
        <Stack sx={{ display: "flex", justifyContent: "center", flexDirection:'row' }}>
          <Typography fontSize={14} fontWeight={400}>
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
