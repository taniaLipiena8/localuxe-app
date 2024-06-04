import { FormControl, TextField } from "@mui/material";
import React from "react";
import Field from "../../../../../components/formField/Field";

const UsernameField = () => {
  return (
    <FormControl fullWidth>
      <Field
        title="Username"
        child={
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            size="small"
          />
        }
      />
    </FormControl>
  );
};

export default UsernameField;
