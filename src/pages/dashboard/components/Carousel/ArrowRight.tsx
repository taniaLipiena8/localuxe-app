import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, SxProps } from "@mui/material";

interface Props {
  onClick: () => void;
}

const ArrowRight: React.FC<Props> = ({onClick}) => {
  const arrowStyle: SxProps = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  return (
    <Button sx={arrowStyle} onClick={onClick}>
      <ChevronRightIcon fontSize="medium"/>
    </Button>
  );
};

export default ArrowRight;
