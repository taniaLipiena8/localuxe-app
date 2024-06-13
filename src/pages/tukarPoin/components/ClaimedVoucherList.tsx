import React from "react";
import useGetClaimedVoucher from "../services/useGetClaimedVoucher";
import { Stack, Grid, Typography } from "@mui/material";
import VoucherCard from "./VoucherCard";



const ClaimedVoucherList: React.FC= () => {
  const { claimedVouchers } = useGetClaimedVoucher();
  return claimedVouchers.length > 0 ? (
    <Stack justifyContent={"left"}>
      <Grid container spacing={5}>
        {claimedVouchers.map((voucher) => (
          <Grid item xs={6}>
            <VoucherCard voucher={voucher.voucher}  />
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
        Belum ada voucher yang diklaim.
      </Typography>
    </Stack>
  );
};

export default ClaimedVoucherList;
