import { Card, Stack, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import React from "react";
import { InsightListRecord } from "../../../../models/InsightListModel";

interface Props {
  insight: InsightListRecord | null;
}

const InsightCard: React.FC<Props> = ({ insight }) => {
  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      <CardActionArea sx={{display:"flex", flexDirection:"row"}}>
        <Stack width={180} padding={2} sx={{ justifyContent: "center" }}>
          <CardMedia
            component="img"
            height="100"
            image={insight?.gambar}
            alt="random insight image"
          />
        </Stack>
        <CardContent
          sx={{
            textAlign: "left",
            width: "100%",
          }}
        >
          <Stack direction={"column"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              paddingBottom={1}
            >
              <Typography component="div" fontSize={12}>
                {insight?.namaPenulis}
              </Typography>
              <Typography component="div" fontSize={12}>
                {insight?.tanggalPembuatan}
              </Typography>
            </Stack>
            <Typography component="div" fontSize={18}>
              {insight?.judul}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {insight?.ringkasanKonten}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InsightCard;
