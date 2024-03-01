import { Box } from "@mui/material";
import React from "react";
import BrandNameField from "./BrandNameField";
import SellerConfirmPasswordField from "./SellerConfirmPasswordField";
import SellerEmailField from "./SellerEmailField";
import SellerPasswordField from "./SellerPasswordField";

const SellerForm = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
      <SellerEmailField />
      <SellerPasswordField />
      <SellerConfirmPasswordField />
      <BrandNameField />
    </Box>
  );
};

export default SellerForm;
