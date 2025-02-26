import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  text: string;
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

const DialogConfirm: React.FC<Props> = ({
  handleSubmit,
  handleClose,
  open,
  text,
}) => {
  const getTitle = () => {
    switch (text) {
      case "1":
        return "Klaim";

      case "2":
        return "Penggunaan";
    }
  };

  const getText = () => {
    switch (text) {
      case "1":
        return "melakukan klaim untuk";

      case "2":
        return "menggunakan";
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle color={"#674342"} fontWeight={700}>
        Konfirmasi {getTitle()} Voucher
      </DialogTitle>
      <DialogContent>
        <Typography color={"#674342"}>
          Apakah anda yakin ingin {getText()} voucher ini?
        </Typography>
        <DialogActions>
          <Stack width={"100%"} gap={2} flexDirection={"row"} marginTop={2}>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              Tidak
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ color: "white" }}
            >
              Iya
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DialogConfirm;
