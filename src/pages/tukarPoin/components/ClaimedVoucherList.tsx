import React from "react";
import useGetClaimedVoucher from "../services/useGetClaimedVoucher";
import { Stack, Grid, Typography } from "@mui/material";
import VoucherCard from "./VoucherCard";
import ClaimedVoucherContext from "../context/ClaimedVoucherContext";

const ClaimedVoucherList: React.FC = () => {
  const { claimedVouchers, getClaimedVouchers } = useGetClaimedVoucher();
  return claimedVouchers.length > 0 ? (
    <ClaimedVoucherContext.Provider
      value={{ getClaimedVouchers: getClaimedVouchers }}
    >
      <Stack justifyContent={"left"}>
        <Grid container spacing={5}>
          {claimedVouchers.map((voucher) => (
            <Grid item xs={6}>
              <VoucherCard
                key={voucher.voucherDetailId}
                voucher={voucher.voucher}
                voucherDetailId={voucher.voucherDetailId}
                code={voucher.voucherCode}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ClaimedVoucherContext.Provider>
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
