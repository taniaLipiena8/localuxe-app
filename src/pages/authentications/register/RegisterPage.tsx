import {
  SxProps,
  Stack,
  Card,
  Box,
  Typography,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import EmailField from "../login/components/EmailField";
import PasswordField from "../login/components/PasswordField";
import CustomerForm from "./components/customer/CustomerForm";
import { Margin, Troubleshoot } from "@mui/icons-material";
import SellerForm from "./components/seller/SellerForm";

const RegisterPage = () => {
  const theme = useTheme();
  const form = useForm();
  const [isCustomer, setIsCustomer] = useState<boolean>(Troubleshoot);

  const rootStyle = {
    backgroundColor: "#F7E7E7",
    minHeight: "100vh",
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
    marginY: 4,
  };

  const logoStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 2,
  };

  return (
    <Stack sx={rootStyle}>
      <Card sx={cardStyle}>
        <Box sx={logoStyle}>
          <Typography fontSize={"32px"}>Buat Akun LOCALUXE</Typography>
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "start",
            mb: 2,
          }}
        >
          <Typography
            fontSize={18}
            fontWeight="bold"
            sx={{ paddingBottom: 1, textAlign: "start" }}
          >
            Apa Peran Anda
          </Typography>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
            }}
            gap={2}
          >
            <Button
              disabled={isCustomer}
              variant="contained"
              onClick={() => setIsCustomer(true)}
              sx={{ width: "100%", color: "white" }}
            >
              Customer
            </Button>
            <Button
              disabled={!isCustomer}
              variant="contained"
              onClick={() => setIsCustomer(false)}
              sx={{ width: "100%", color: "white" }}
            >
              Seller
            </Button>
          </Box>
        </Box>
        <FormProvider {...form}>
          <form>
            {isCustomer ? <CustomerForm /> : <SellerForm />}
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "100%", my: 4, color: "white" }}
            >
              Submit
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
          <Typography fontSize={14} fontWeight={400}>
            Sudah memiliki akun?
          </Typography>
          <Link href="/register" color="inherit" underline="always">
            Login
          </Link>
        </Stack>
      </Card>
    </Stack>
  );
};

export default RegisterPage;
