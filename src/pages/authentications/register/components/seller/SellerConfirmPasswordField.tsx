import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Field from "../../../../../components/formField/Field";

const SellerConfirmPasswordField = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl fullWidth>
      <Field
        title="Konfirmasi Password"
        child={
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            size="small"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        }
      />
    </FormControl>
  );
};

export default SellerConfirmPasswordField;