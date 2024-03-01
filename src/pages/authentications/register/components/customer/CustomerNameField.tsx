import { FormControl, TextField } from '@mui/material'
import React from 'react'
import Field from '../../../../../components/formField/Field'

const CustomerNameField = () => {
  return (
    <FormControl fullWidth>
      <Field
        title="Nama"
        child={
          <TextField fullWidth label="Nama" variant="outlined" size="small" />
        }
      />
    </FormControl>
  )
}

export default CustomerNameField