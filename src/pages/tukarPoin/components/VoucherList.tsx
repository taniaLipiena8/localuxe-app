import { Grid, Stack } from "@mui/material";
import React from "react";
import useGetVouchers from "../services/useGetVouchers";
import VoucherCard from "./VoucherCard";

const VoucherList: React.FC = () => {
  const { voucherList } = useGetVouchers();
  return (
    voucherList.length > 0 && (
      <Stack justifyContent={"left"}>
        <Grid container spacing={5}>
          {voucherList.map((voucher) => (
            <Grid item xs={6}>
              <VoucherCard voucher={voucher}  />
            </Grid>
          ))}
        </Grid>
      </Stack>
    )
  );
};

export default VoucherList;
