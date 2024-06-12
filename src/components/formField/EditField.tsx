import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  child: React.ReactNode;
}

const EditField: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{ flexDirection: "column", display: "flex", justifyContent: "start" }}
    >
      <Typography
        fontSize={16}
        sx={{ paddingBottom: 1, textAlign: "start" }}
      >
        {props.title}
      </Typography>
      {props.child}
    </Box>
  );
};

export default EditField;
