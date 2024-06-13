/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { VoucherListRecord } from "../models/VoucherModel";
import toast, { Toaster } from "react-hot-toast";
import useAxiosAuth from "../../../hooks/useAxiosAuth";
import DialogCard from "./DialogCard";
import VoucherContext from "../context/VoucherContext";

interface Props {
  voucher: VoucherListRecord;
}

const VoucherCard: React.FC<Props> = ({ voucher }) => {
  const axiosAuth = useAxiosAuth();
  const { value, getPoint } = useContext(VoucherContext);

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClaim = async () => {
    try {
      const body = {
        voucher_id: voucher.voucherId,
      };
      await axiosAuth.post("/claim_voucher", body);
      toast.success("Sukses Klaim Voucher");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log("Klaim Error", error);
    } finally {
      getPoint();
    }
  };

  //   const handlePakai = async () => {
  //     try {
  //       const body = {
  //         voucher_id: voucher.voucherId,
  //       };
  //       await axiosAuth.post("/claim_voucher", body);
  //       toast.success("Sukses Klaim Voucher");
  //     } catch (error: any) {
  //       toast.error(error.response.data.message);
  //       console.log("Klaim Error", error);
  //     }
  //   };

  const handleClickCard = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          bgcolor: "#F8DAD9",
          width: "100%",
          justifyContent: "left",
          height: "120px",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            justifyContent: "start",
          }}
          onClick={() => handleClickCard()}
        >
          <Stack width={150} padding={1} sx={{ justifyContent: "center" }}>
            <img src="/voucher.png" alt="Paris" width={"160px"} />
          </Stack>
          <CardContent
            sx={{
              textAlign: "left",
              paddingY: 1,
              width: "100%",
            }}
          >
            <Stack
              sx={{
                justifyContent: "space-between",
                height: "100%",
              }}
              direction={"column"}
            >
              <Typography component="div" fontSize={18}>
                {voucher?.namaVoucher}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {voucher?.poinDibutuhkan}
              </Typography>
              <Stack
                justifyContent={"space-between"}
                flexDirection={"row"}
                width={"100%"}
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Hingga {voucher?.periodeAkhir}
                </Typography>
                {value === "1" && (
                  <Button
                    variant="contained"
                    sx={{ color: "white" }}
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleClaim();
                    }}
                  >
                    Klaim
                  </Button>
                )}

                {value === "2" && (
                  <Button
                    variant="contained"
                    sx={{ color: "white" }}
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    Pakai
                  </Button>
                )}
                {value === "3" && (
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Berakhir
                  </Typography>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Toaster />
      <DialogCard
        open={open}
        handleClose={handleClose}
        desc={voucher.deskripsi}
      />
    </>
  );
};

export default VoucherCard;
