import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import Field from "../../../../../components/formField/Field";

const GenderField: React.FC = () => {
  return (
    <FormControl fullWidth>
      <Field
        title="Gender"
        child={
          <RadioGroup row defaultValue="Perempuan">
            <FormControlLabel value="Perempuan" control={<Radio />} label="Perempuan" />
            <FormControlLabel value="Laki-laki" control={<Radio />} label="Laki-laki" />
          </RadioGroup>
        }
      />
    </FormControl>
  );
};

export default GenderField;
