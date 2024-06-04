import { FormControl, TextField } from '@mui/material'
import React from 'react'
import Field from '../../../../../components/formField/Field'

const PasswordField = () => {
  return (
   
    <FormControl fullWidth>
      <Field
        title="Password"
        child={
          <TextField fullWidth label="Password" variant="outlined" size="small" />
        }
      />
    </FormControl>
  )
}

export default PasswordField