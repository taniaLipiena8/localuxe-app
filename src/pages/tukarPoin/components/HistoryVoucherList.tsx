import React from "react";
import useGetHistoryVoucher from "../services/useHistoryVoucher";
import { Stack, Grid, Typography } from "@mui/material";
import VoucherCard from "./VoucherCard";

const HistoryVoucherList: React.FC = () => {
  const { historyVouchers } = useGetHistoryVoucher();
  return historyVouchers.length > 0 ? (
    <Stack justifyContent={"left"}>
      <Grid container spacing={5}>
        {historyVouchers.map((voucher) => (
          <Grid item xs={6}>
            <VoucherCard voucher={voucher.voucher} dipakai={voucher.dipakai} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  ) : (
    <Stack>
      <Typography
        component="div"
        variant="h4"
        color={"#674342"}
        fontWeight={700}
      >
        Belum ada riwayat
      </Typography>
    </Stack>
  );
};

export default HistoryVoucherList;
