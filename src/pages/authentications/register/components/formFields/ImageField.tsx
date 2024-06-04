import { FormControl, Input } from "@mui/material";
import React from "react";
import Field from "../../../../../components/formField/Field";

const ImageField = () => {
  return (
    <FormControl fullWidth>
      <Field
        title="Username"
        child={
          <Input
            type="file"
            inputProps={{
              accept: "image/png, image/jpg, image/jpeg",
            }}
            // onChange={(event) => {
            //   handleInputFile(event.target as HTMLInputElement);
            // }}
          />
        }
      />
    </FormControl>
  );
};

export default ImageField;
