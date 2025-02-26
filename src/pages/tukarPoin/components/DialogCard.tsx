import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  desc: string;
}

const DialogCard: React.FC<Props> = ({ handleClose, open, desc }) => {
  const text = desc.split(";");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Syarat dan Ketentuan</DialogTitle>
      <DialogContent>
        {text.map((part, index) => (
          <Typography>
            {index + 1}. {part}
          </Typography>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default DialogCard;
