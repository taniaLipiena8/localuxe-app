import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'

interface Props {
    title: string;
    child: React.ReactNode;
  }

const Field: React.FC<Props> = (props) => {
    const theme = useTheme();
    return (
      <Box sx={{ flexDirection: "column", display: "flex", justifyContent:'start' }}>
        <Typography
          fontSize={18}
          fontWeight="bold"
          sx={{ paddingBottom: 1, textAlign:'start' }}
        >
          {props.title}
        </Typography>
        {props.child}
      </Box>
    );
}

export default Field