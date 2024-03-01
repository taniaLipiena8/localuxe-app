import { FormControl, TextField } from "@mui/material";
import Field from "../../../../../components/formField/Field";

const CustomerEmailField = () => {
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

export default CustomerEmailField;
