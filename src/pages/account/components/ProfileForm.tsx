/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Button,
  FormControlLabel,
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
import { isEmpty } from "lodash";
import { Controller } from "react-hook-form";

const ProfileForm: React.FC = () => {
  const initValue = {
    userId: null,
    namaLengkap: null,
    userName: null,
    gambarProfile: null,
    email: null,
    gender: null,
    nomorTelepon: null,
  };
  const [currData, setCurrData] = useState<any>(initValue);
  const { userData } = useGetUserData();
  const [preview, setPreview] = useState<any>(null);
  const [newImage, setNewImage] = useState<any>(null);
  const axiosAuth = useAxiosAuth();
  console.log(currData);

  const handleOnSubmit = async () => {
    try {
      if (
        isEmpty(currData.userName) ||
        isEmpty(currData.namaLengkap) ||
        isEmpty(currData.nomorTelepon)
      ) {
        toast.error(
          "Username, Nama Lengkap, dan Nomor Telepon tidak boleh kosong!"
        );
        return;
      }

      const body: any = {
        nama_pengguna: currData.userName,
        nama_lengkap: currData.namaLengkap,
        gender: currData.gender,
        nomor_telepon: currData.nomorTelepon,
      };
      if (!isEmpty(newImage)) {
        body.gambar_pengguna = newImage;
      }

      await axiosAuth.put("/user_profile", body);
      toast.success("Sukses mengganti profile");

      window.location.reload();
    } catch (error: any) {
      toast.error(`Error Mengganti Profile : ${error.response.data.message}`);
      console.log("Error Mengganti Profile", error);
    }
  };

  useEffect(() => {
    if (userData) {
      setCurrData(userData);
      setPreview(userData.gambarProfile);
    }
  }, [userData]);

  const handleChangeProfileValue = (fieldName: any, value: any) => {
    setCurrData((iv: any) => ({
      ...iv,
      [fieldName]: value,
    }));
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
        setNewImage(base64Data?.toString().split(",")[1]);
      };
    }
  };

  return (
    <Stack gap={2} width={"50%"} padding={2}>
      <Typography fontSize={18} textAlign={"left"}>
        Profile
      </Typography>

      <EditField
        title="Username"
        child={
          <TextField
            label="Username"
            size="small"
            required
            value={currData.userName ?? ""}
            onChange={(e) => {
              handleChangeProfileValue("userName", e.target.value);
            }}
          />
        }
      />

      <EditField
        title="Nama Lengkap"
        child={
          <TextField
            label="Nama Lengkap"
            size="small"
            required
            value={currData.namaLengkap ?? ""}
            onChange={(e) => {
              handleChangeProfileValue("namaLengkap", e.target.value);
            }}
          />
        }
      />

      <EditField
        title="Email"
        child={
          <TextField
            label="Email"
            disabled
            size="small"
            value={currData.email ?? ""}
          />
        }
      />

      <EditField
        title="Gender"
        child={
          <>
            <RadioGroup
              row
              value={currData.gender ?? ""}
              onChange={(e) =>
                handleChangeProfileValue("gender", e.target.value)
              }
            >
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
          </>
        }
      />

      <EditField
        title="Nomor Telepon"
        child={
          <MuiTelInput
            defaultCountry="ID"
            forceCallingCode
            required
            disableFormatting
            onChange={(e) => handleChangeProfileValue("nomorTelepon", e)}
            value={currData.nomorTelepon}
            size="small"
          />
        }
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
        onClick={handleOnSubmit}
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
  );
};

export default ProfileForm;
