import { Box, Stack, SxProps, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetUserPoint from "./services/useGetUserPoint";
import VoucherList from "./components/VoucherList";
import ClaimedVoucherList from "./components/ClaimedVoucherList";
import HistoryVoucherList from "./components/HistoryVoucherList";
import VoucherContext from "./context/VoucherContext";

const TukarPoinPage: React.FC = () => {
  const tabStyle: SxProps = {
    color: "#674342",
    "&.Mui-selected": {
      color: "#CE8483",
    },
  };
  const { getUserPoint, userPoint } = useGetUserPoint();
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <VoucherContext.Provider
      value={{
        value: value,
        getPoint: getUserPoint,
      }}
    >
      <Stack flexDirection={"column"} marginTop={2} paddingX={30} gap={3}>
        <Typography
          textAlign={"left"}
          component="div"
          variant="h5"
          color={"#674342"}
        >
          Poin Anda : {userPoint}
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "#674342" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Voucher" value="1" sx={tabStyle} />
            <Tab label="Voucher Saya" value="2" sx={tabStyle} />
            <Tab label="Riwayat" value="3" sx={tabStyle} />
          </Tabs>
        </Box>

        {value === "1" && <VoucherList />}
        {value === "2" && <ClaimedVoucherList />}
        {value === "3" && <HistoryVoucherList />}
      </Stack>
    </VoucherContext.Provider>
  );
};

export default TukarPoinPage;
