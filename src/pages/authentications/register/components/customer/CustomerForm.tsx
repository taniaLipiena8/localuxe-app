import { Box } from "@mui/material";
import React from "react";
import CustomerConfirmPasswordField from "./CustomerConfirmPasswordField";
import CustomerEmailField from "./CustomerEmailField";
import CustomerNameField from "./CustomerNameField";
import CustomerPasswordField from "./CustomerPasswordField";

const CustomerForm = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
      <CustomerEmailField />
      <CustomerPasswordField />
      <CustomerConfirmPasswordField />
      <CustomerNameField />
    </Box>
  );
};

export default CustomerForm;
