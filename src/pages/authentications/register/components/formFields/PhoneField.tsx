import { FormControl } from '@mui/material'
import React from 'react'
import Field from '../../../../../components/formField/Field'
import { MuiTelInput } from 'mui-tel-input'

const PhoneField : React.FC= () => {
  return (
    
    <FormControl fullWidth>
      <Field
        title="Nomor Telepon"
        child={
            <MuiTelInput
            defaultCountry="ID"
            forceCallingCode
            disableFormatting
            // onChange={handleChange}
            // value={value}
            size="small"
          />
        }
      />
    </FormControl>
  )
}

export default PhoneField