import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAxiosAuth from "../../hooks/useAxiosAuth";

const VisitorButtons: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleOnClickLogin() {
    navigate({
      pathname: "/login",
    });
  }

  function handleOnClickRegister() {
    navigate({
      pathname: "/register",
    });
  }

  const axiosAuth = useAxiosAuth()

  const getUser = async () => {
    try {
      console.log(axiosAuth);
      
      const response = await axiosAuth.get("/user_data",);
      console.log(response.data.data);
    } catch (error) {
      console.log("Get user error");
    }
  };
  
  const handleClick =()=>{
    getUser()
  }

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
      <Button
        fullWidth
        variant="contained"
        onClick={handleOnClickLogin}
        sx={{
          height: "36px",
          minWidth: "80px",
          backgroundColor: theme.palette.background.default,
          color:"#674342",
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            color: theme.palette.background.default,
          },
        }}
      >
        LOG IN
      </Button>
      <Button
        fullWidth
        variant="contained"
        onClick={handleClick}
        sx={{
          height: "36px",
          backgroundColor: theme.palette.background.default,
          color:"#674342",
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            color: theme.palette.background.default,
            backgroundColor: "#964A52",
          },
        }}
      >
        REGISTER
      </Button>
    </Box>
  );
};

export default VisitorButtons;
