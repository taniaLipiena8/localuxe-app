/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Button,
  FormControlLabel,
  FormHelperText,
  Input,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useGetUserData from "../../../services/useGetUserData";
import EditField from "../../../components/formField/EditField";
import { MuiTelInput } from "mui-tel-input";
import useAxiosAuth from "../../../hooks/useAxiosAuth";
import toast, { Toaster } from "react-hot-toast";
import { debounce, isEmpty } from "lodash";
import { Controller, FormProvider, useForm } from "react-hook-form";

const ProfileForm: React.FC = () => {
  const { userData } = useGetUserData();
  const axiosAuth = useAxiosAuth();
  const form = useForm();
  const [preview, setPreview] = useState<any>(null);
  const [newImage, setNewImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const reload = debounce(() => {
    window.location.reload();
  }, 800);

  const handleOnSubmit = async (value: any) => {
    setLoading(true);
    try {
      if (
        isEmpty(value.userName) ||
        isEmpty(value.namaLengkap) ||
        isEmpty(value.nomorTelepon)
      ) {
        toast.error(
          "Username, Nama Lengkap, dan Nomor Telepon tidak boleh kosong!"
        );
        return;
      }

      const body: any = {
        nama_pengguna: value.userName,
        nama_lengkap: value.namaLengkap,
        gender: value.gender,
        nomor_telepon: value.nomorTelepon,
      };
      if (!isEmpty(newImage)) {
        body.gambar_pengguna = newImage;
      }

      await axiosAuth.put("/user_profile", body);
      toast.success("Sukses mengganti profile");
      reload();
    } catch (error: any) {
      toast.error(`Error Mengganti Profile : ${error.response.data.message}`);
      console.log("Error Mengganti Profile", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData) {
      setPreview(userData.gambarProfile);
      form.reset(userData);
    }
  }, [userData]);

  const handleInputFile = (event: HTMLInputElement) => {
    if (event.files && event.files.length > 0) {
      const temp = event.files[0];

      const url = URL.createObjectURL(temp);

      setPreview(url);
      const reader = new FileReader();
      reader.readAsDataURL(temp);

      reader.onloadend = () => {
        const base64Data = reader.result;
        setNewImage(base64Data?.toString().split(",")[1]);
      };
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <Stack
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          width={"100%"}
          padding={2}
        >
          <Typography fontSize={18} textAlign={"left"}>
            Profile
          </Typography>

          <Controller
            name="userName"
            control={form.control}
            rules={{ required: "This is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <EditField
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <EditField
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <EditField
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
                    disabled
                  />
                }
              />
            )}
          />

          <Controller
            name="gender"
            control={form.control}
            rules={{ required: "This is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <EditField
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <EditField
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
          <EditField
            title="Upload Gambar"
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

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "25%",
              mb: 4,
              mt: 3,
              color: "white",
              textTransform: "none",
            }}
            disabled={loading}
          >
            Submit
          </Button>

          <Toaster />
        </Stack>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
