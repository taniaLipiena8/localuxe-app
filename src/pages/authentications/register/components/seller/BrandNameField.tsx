import { FormControl, TextField } from "@mui/material";
import React from "react";
import Field from "../../../../../components/formField/Field";

const BrandNameField = () => {
  return (
    <FormControl fullWidth>
      <Field
        title="Nama Brand"
        child={
          <TextField
            fullWidth
            label="Nama Brand"
            variant="outlined"
            size="small"
          />
        }
      />
    </FormControl>
  );
};

export default BrandNameField;
