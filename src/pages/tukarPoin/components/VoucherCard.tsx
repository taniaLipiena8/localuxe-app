/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { VoucherListRecord } from "../models/VoucherModel";
import toast, { Toaster } from "react-hot-toast";
import useAxiosAuth from "../../../hooks/useAxiosAuth";
import DialogCard from "./DialogCard";
import VoucherContext from "../context/VoucherContext";
import ClaimedVoucherContext from "../context/ClaimedVoucherContext";
import { debounce } from "lodash";
import DialogConfirm from "./DialogConfirm";

interface Props {
  voucherDetailId?: number;
  voucher: VoucherListRecord;
  dipakai?: boolean;
}

const VoucherCard: React.FC<Props> = ({
  voucher,
  voucherDetailId,
  dipakai,
}) => {
  const axiosAuth = useAxiosAuth();
  const { value, getPoint } = useContext(VoucherContext);
  const { getClaimedVouchers } = useContext(ClaimedVoucherContext);

  const [open, setOpen] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const getVoucher = debounce(() => {
    getClaimedVouchers();
  }, 300);

  const handleClaim = async () => {
    try {
      const body = {
        voucher_id: voucher.voucherId,
      };
      await axiosAuth.post("/claim_voucher", body);
      toast.success("Sukses Klaim Voucher!");
    } catch (error: any) {
      if (error.response.data.status !== 403) {
        toast.error(`Error Klaim Voucher : ${error.response.data.message}`);
      }
      console.log("Klaim Error", error);
    } finally {
      getPoint();
      setOpenConfirm(false);
    }
  };

  const handlePakai = async () => {
    try {
      const body = {
        voucher_detail_id: voucherDetailId,
      };
      await axiosAuth.put("/use_voucher", body);
      toast.success("Sukses Pakai Voucher!");
      getVoucher();
    } catch (error: any) {
      if (error.response.data.status !== 403) {
        toast.error(`Error Pakai Voucher: ${error.response.data.message}`);
      }
      console.log("Use Error", error);
    } finally {
      setOpenConfirm(false);
    }
  };

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
            <img src={voucher.gambarVoucher} alt="Paris" width={"160px"} />
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
                width: "100%",
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
                      setOpenConfirm(true);
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
                      setOpenConfirm(true);
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
                    fontWeight={700}
                  >
                    {dipakai === true ? "Dipakai" : "Berakhir"}
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
      <DialogConfirm
        open={openConfirm}
        handleClose={() => setOpenConfirm(false)}
        handleSubmit={value === "1" ? handleClaim : handlePakai}
        text={value}
      />
    </>
  );
};

export default VoucherCard;
