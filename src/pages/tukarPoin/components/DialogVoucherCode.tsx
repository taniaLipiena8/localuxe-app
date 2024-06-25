import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Stack,
  Button,
} from "@mui/material";
import React from "react";

interface Props {
  code: string;
  open: boolean;
  handleClose: () => void;
}

const DialogVoucherCode: React.FC<Props> = ({ open, handleClose, code }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        color={"#674342"}
        fontSize={26}
        fontWeight={700}
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 1,
        }}
      >
        Kode Voucher
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography color={"#674342"}>
          Berikut adalah kode voucher anda:
        </Typography>
        <Stack flexDirection={"row"} width={"100%"} justifyContent={"center"}>
          <Typography color={"#674342"} fontSize={20} fontWeight={700}>
            {code}
          </Typography>
        </Stack>
        <DialogActions>
          <Stack width={"100%"} gap={2} flexDirection={"row"} marginTop={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleClose}
              sx={{ color: "white" }}
            >
              Tutup
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DialogVoucherCode;
