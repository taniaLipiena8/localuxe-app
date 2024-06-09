import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { InsightListRecord } from "../../../../models/InsightListModel";

interface Props {
  insightData: InsightListRecord | null;
}

const DashboardInsightCard: React.FC<Props> = ({ insightData }) => {
  return (
    <Card sx={{ display: "flex", width: "100%", height: "130px" }}>
      <Stack width={150} padding={1} sx={{ justifyContent: "center" }}>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "65%", objectFit: "fill" }}
          image={insightData?.gambar}
          alt="insight image"
        />
      </Stack>
      <CardContent
        sx={{
          textAlign: "left",
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
            {insightData?.judul}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
           {insightData?.tanggalPembuatan}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DashboardInsightCard;
