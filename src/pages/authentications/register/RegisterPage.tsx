import {
  SxProps,
  Stack,
  Card,
  Box,
  Typography,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CustomerForm from "./components/formFields/CustomerForm";
import CustomerConfirmPasswordField from "./components/formFields/CustomerConfirmPasswordField";
import CustomerEmailField from "./components/formFields/CustomerEmailField";
import CustomerNameField from "./components/formFields/CustomerNameField";
import CustomerPasswordField from "./components/formFields/CustomerPasswordField";
import UsernameField from "./components/formFields/UsernameField";
import EmailField from "./components/formFields/EmailField";
import PasswordField from "./components/formFields/PasswordField";
import NamaLengkapField from "./components/formFields/NamaLengkapField";
import GenderField from "./components/formFields/GenderField";
import PhoneField from "./components/formFields/PhoneField";
import ImageField from "./components/formFields/ImageField";
import { BorderColor } from "@mui/icons-material";

const RegisterPage: React.FC = () => {
  const form = useForm();

  const rootStyle = {
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
    border: "1px solid #674342",
  };

  const titleStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 2,
  };

  return (
    <Stack sx={rootStyle}>
      <Card sx={cardStyle}>
        <Box sx={titleStyle}>
          <Typography fontSize={"32px"} color={"#674342"}>
            Buat Akun LOCALUXE
          </Typography>
        </Box>

        <FormProvider {...form}>
          <form>
            <Stack
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              gap={2}
            >
              <UsernameField />
              <NamaLengkapField />
              <EmailField />
              <PasswordField />
              <GenderField />
              <PhoneField />
              <ImageField />
            </Stack>
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
          <Typography fontSize={14} fontWeight={400} color={"#674342"}>
            Sudah memiliki akun?
          </Typography>
          <Link href="/login" color="inherit" underline="always">
            Login
          </Link>
        </Stack>
      </Card>
    </Stack>
  );
};

export default RegisterPage;
