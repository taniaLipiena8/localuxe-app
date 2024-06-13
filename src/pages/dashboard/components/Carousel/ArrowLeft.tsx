import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, SxProps } from "@mui/material";

interface Props {
  onClick: () => void;
}
const ArrowLeft: React.FC<Props> = ({onClick}) => {
  const arrowStyle: SxProps = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#674342",
    zIndex: 1,
    cursor: "pointer",
  };
  return <Button sx={arrowStyle} onClick={onClick}>
    <ChevronLeftIcon fontSize="medium"/>
  </Button>;
};

export default ArrowLeft;
