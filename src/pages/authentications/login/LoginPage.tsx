/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Card,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Field from "../../../components/formField/Field";
import toast, { Toaster } from "react-hot-toast";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import axiosClient from "../../../services/AxiosClient";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../../context/AuthProvider";
const LoginPage: React.FC = () => {
  // ============================================== Styles =================================================
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

  // ========================================= Hooks and States =============================================
  const form = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { setExp, setToken, setRefreshToken, setAuth } =
    useContext(AuthContext);

  // ============================================== Functions =================================================

  const handleOnSubmit = async (value: any) => {
    try {
      const body = {
        email_pengguna: value.email,
        password_pengguna: value.password,
      };
      const response = await axiosClient.post("/login", body, {
        withCredentials: true,
      });
      setAuth("Logged in");
      setToken(response.data.data.access_token);
      setRefreshToken(response.data.data.refresh_token);
      const decoded = jwtDecode(response.data.data.access_token);
      console.log("hasil decode", decoded);
      setExp(decoded.exp!);

      localStorage.setItem("auth", "Logged in");
      localStorage.setItem("refreshToken", response.data.data.refresh_token);
      localStorage.setItem("exp", String(decoded.exp!));

      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log("Error Login", error);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack sx={rootStyle}>
      <Card sx={cardStyle}>
        <Box sx={logoStyle}>
          <Typography color={"#674342"} fontSize={"32px"}>
            Selamat datang di LOCALUXE
          </Typography>
        </Box>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              gap={2}
              marginBottom={6}
            >
              <Controller
                name="email"
                control={form.control}
                rules={{ required: "This is required" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Field
                    title="Email"
                    child={
                      <TextField
                        error={!!error}
                        helperText={error?.message}
                        label="Email"
                        value={value ?? ""}
                        onChange={onChange}
                        variant="outlined"
                        type="email"
                        fullWidth
                        size="small"
                      />
                    }
                  />
                )}
              />
              <Controller
                name="password"
                control={form.control}
                rules={{ required: "This is required" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Field
                    title="Password"
                    child={
                      <TextField
                        error={!!error}
                        helperText={error?.message}
                        value={value ?? ""}
                        onChange={onChange}
                        fullWidth
                        label="Password"
                        variant="outlined"
                        size="small"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    }
                  />
                )}
              />
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
      <Toaster />
    </Stack>
  );
};

export default LoginPage;
