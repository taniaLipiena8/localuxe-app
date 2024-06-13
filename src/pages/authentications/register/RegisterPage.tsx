/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SxProps,
  Stack,
  Card,
  Box,
  Typography,
  Button,
  Link,
  IconButton,
  InputAdornment,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Input,
  Avatar,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import Field from "../../../components/formField/Field";
import { MuiTelInput } from "mui-tel-input";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";
import axiosClient from "../../../services/AxiosClient";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage: React.FC = () => {
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

  // ========================================= Hooks and States =============================================

  const form = useForm();
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [preview, setPreview] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  // ============================================== useEffects =================================================
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  // ============================================== Functions =================================================
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnSubmit = async (value: any) => {
    const body = {
      nama_lengkap: value.namaLengkap,
      nama_pengguna: value.username,
      email_pengguna: value.email,
      password_pengguna: value.password,
      gender: value.gender,
      nomor_telepon: value.nomorTelepon,
      gambar_pengguna: image,
    };
    try {
      await axiosClient.post("/register", body, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error: any) {
      toast.error(`Register Error: ${error.toString()}`);
    }
  };

  const handleInputFile = (event: HTMLInputElement) => {
    if (event.files && event.files.length > 0) {
      const temp = event.files[0];

      const url = URL.createObjectURL(temp);
      setPreview(url);
      const reader = new FileReader();
      reader.readAsDataURL(temp);

      reader.onloadend = () => {
        const base64Data = reader.result;
        setImage(base64Data?.toString().split(",")[1]);
      };
    }
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
          <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <Stack
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              gap={2}
            >
              <Controller
                name="username"
                control={form.control}
                rules={{ required: "This is required" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Field
                    title="Username"
                    child={
                      <TextField
                        error={!!error}
                        helperText={error?.message}
                        label="Username"
                        value={value ?? ""}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    }
                  />
                )}
              />
              <Controller
                name="namaLengkap"
                control={form.control}
                rules={{ required: "This is required" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Field
                    title="Nama Lengkap"
                    child={
                      <TextField
                        error={!!error}
                        helperText={error?.message}
                        label="Nama Lengkap"
                        value={value ?? ""}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    }
                  />
                )}
              />
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
              <Controller
                name="gender"
                control={form.control}
                rules={{ required: "This is required" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Field
                    title="Gender"
                    child={
                      <>
                        <RadioGroup row value={value ?? ""} onChange={onChange}>
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Perempuan"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Laki-laki"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Lain-lain"
                          />
                        </RadioGroup>
                        <FormHelperText>{error?.message}</FormHelperText>
                      </>
                    }
                  />
                )}
              />
              <Controller
                name="nomorTelepon"
                control={form.control}
                rules={{ required: "This is required" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Field
                    title="Nomor Telepon"
                    child={
                      <MuiTelInput
                        defaultCountry="ID"
                        forceCallingCode
                        disableFormatting
                        onChange={onChange}
                        value={value}
                        size="small"
                        error={!!error}
                        helperText={error?.message}
                      />
                    }
                  />
                )}
              />
              <Field
                title="Photo"
                child={
                  <>
                    <Input
                      type="file"
                      inputProps={{
                        accept: "image/png, image/jpg, image/jpeg",
                      }}
                      onChange={(e) => {
                        handleInputFile(e.target as HTMLInputElement);
                      }}
                    />
                  </>
                }
              />
              <Avatar src={preview} sx={{ width: 80, height: "auto" }} />
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
          <Typography
            fontSize={14}
            fontWeight={400}
            color={"#674342"}
            marginRight={1}
          >
            Sudah memiliki akun?
          </Typography>
          <Link href="/login" color="inherit" underline="always">
            Login
          </Link>
        </Stack>
      </Card>
      <Toaster />
    </Stack>
  );
};

export default RegisterPage;
