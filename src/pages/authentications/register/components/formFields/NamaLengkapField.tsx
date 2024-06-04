import { FormControl, TextField } from '@mui/material'
import React from 'react'
import Field from '../../../../../components/formField/Field'

const NamaLengkapField = () => {
  return (
    
    <FormControl fullWidth>
      <Field
        title="Nama Lengkap"
        child={
          <TextField fullWidth label="Nama Lengkap" variant="outlined" size="small" />
        }
      />
    </FormControl>
  )
}

export default NamaLengkapField