/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import useGetUserData from "../../services/useGetUserData";
import { Avatar, Box, Button, IconButton, useTheme } from "@mui/material";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import { debounce } from "lodash";

const LoggedUserButtons = () => {
  const { setExp, setToken, setRefreshToken, setAuth } =
    useContext(AuthContext);
  const { userData } = useGetUserData();
  const theme = useTheme();
  const navigate = useNavigate();
  const axiosAuth = useAxiosAuth();

  const redirect = debounce(() => {
    setExp(null);
    setToken(null);
    setAuth(null);
    setRefreshToken(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("auth");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("exp");
    navigate("/");
  }, 800);

  const handleLogout = async () => {
    try {
      await axiosAuth.delete("/logout");

      toast.success(`Sukses melakukan logout!`);

      redirect();
    } catch (error: any) {
      toast.error(`Error Logout : ${error.toString()}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      }}
      gap={3}
    >
      <IconButton
        onClick={() => navigate("/account")}
        sx={{
          height: "36px",
          width: "fit-content",
        }}
      >
        <Avatar src={userData?.gambarProfile} />
      </IconButton>
      <Button
        fullWidth
        variant="contained"
        onClick={handleLogout}
        sx={{
          height: "36px",
          backgroundColor: theme.palette.background.default,
          color: "#674342",
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            color: theme.palette.background.default,
            backgroundColor: "#964A52",
          },
        }}
      >
        LOG OUT
      </Button>

      <Toaster />
    </Box>
  );
};

export default LoggedUserButtons;
