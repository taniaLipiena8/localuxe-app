import { FormControl, TextField } from "@mui/material";
import React from "react";
import Field from "../../../../components/formField/Field";

const EmailField = () => {
  return (
    <FormControl fullWidth>
      <Field
        title="Email"
        child={
          <TextField fullWidth label="Email" variant="outlined" size="small" />
        }
      />
    </FormControl>
  );
};

export default EmailField;
