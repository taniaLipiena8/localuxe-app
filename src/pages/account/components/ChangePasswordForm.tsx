/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import EditField from "../../../components/formField/EditField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
import useAxiosAuth from "../../../hooks/useAxiosAuth";
import useGetUserData from "../../../services/useGetUserData";

const ChangePasswordForm: React.FC = () => {
  const form = useForm();
  const axiosAuth = useAxiosAuth();
  const { getUserData } = useGetUserData();

  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const passwordBaru = form.watch("newPassword");

  const handleOnSubmit = async (value: any) => {
    try {
      const body = {
        password_pengguna: value.oldPassword,
        password_baru_pengguna: value.newPassword,
        confirmation_password: value.confirmPassword,
      };

      await axiosAuth.put("/user_password", body);
      toast.success("Sukses mengganti password.");
      getUserData();
      window.location.reload();
    } catch (error: any) {
      toast.error(`Error mengganti password : ${error.response.data.message}`);
      console.log("Error mengganti password.", error);
    }
  };

  return (
    <Stack gap={2} width={"50%"} padding={2}>
      <Typography fontSize={18} textAlign={"left"}>
        Password
      </Typography>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <Stack
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            gap={2}
          >
            <Controller
              name="oldPassword"
              control={form.control}
              rules={{ required: "Mohon Diisi" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <EditField
                  title="Password Lama"
                  child={
                    <TextField
                      error={!!error}
                      helperText={error?.message}
                      value={value ?? ""}
                      onChange={onChange}
                      fullWidth
                      label="Password Lama"
                      variant="outlined"
                      size="small"
                      type={showOldPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShowOldPassword((show) => !show)
                              }
                              edge="end"
                            >
                              {showOldPassword ? (
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
              name="newPassword"
              control={form.control}
              rules={{ required: "Mohon Diisi" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <EditField
                  title="Password Baru"
                  child={
                    <TextField
                      error={!!error}
                      helperText={error?.message}
                      value={value ?? ""}
                      onChange={onChange}
                      fullWidth
                      label="Password Baru"
                      variant="outlined"
                      size="small"
                      type={showNewPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShowNewPassword((show) => !show)
                              }
                              edge="end"
                            >
                              {showNewPassword ? (
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
              name="confirmPassword"
              control={form.control}
              rules={{
                required: "Mohon Diisi",
                validate: (value) =>
                  value === passwordBaru ||
                  "Password konfirmasi tidak sama dengan password baru!",
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <EditField
                  title="Konfirmasi Password"
                  child={
                    <TextField
                      error={!!error}
                      helperText={error?.message}
                      value={value ?? ""}
                      onChange={onChange}
                      fullWidth
                      label="Konfirmasi Password"
                      variant="outlined"
                      size="small"
                      type={showConfirmPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShowConfirmPassword((show) => !show)
                              }
                              edge="end"
                            >
                              {showConfirmPassword ? (
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

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "25%",
                mb: 4,
                mt: 3,
                color: "white",
                textTransform: "none",
              }}
            >
              Submit
            </Button>

            <Toaster />
          </Stack>
        </form>
      </FormProvider>
    </Stack>
  );
};

export default ChangePasswordForm;
