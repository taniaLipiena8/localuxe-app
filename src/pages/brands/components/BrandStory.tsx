import React from "react";
import { BrandDetailData } from "../../../models/BrandDetailModel";
import { Avatar, Stack, Typography } from "@mui/material";

interface Props {
  detailBrand: BrandDetailData;
}

const BrandStory: React.FC<Props> = ({ detailBrand }) => {
  return (
    <Stack marginBottom={3} gap={1}>
      <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
        <Avatar src={detailBrand.logoMerek} sx={{ height: 60, width: 60 }} />
        <Typography color={"#674342"} fontSize={20} fontWeight={700}>
          {detailBrand.namaMerek.toUpperCase()}
        </Typography>
      </Stack>
      {detailBrand.deskripsiMerek && (
        <Typography
          color={"#674342"}
          fontSize={16}
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {detailBrand.deskripsiMerek.split("\\n").map(function (item, idx) {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          })}
        </Typography>
      )}
    </Stack>
  );
};

export default BrandStory;
