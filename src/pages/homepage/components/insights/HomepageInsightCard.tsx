import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { InsightListRecord } from "../../../../models/InsightListModel";
import { useNavigate } from "react-router-dom";

interface Props {
  insightData: InsightListRecord | null;
}

const DashboardInsightCard: React.FC<Props> = ({ insightData }) => {
  const navigate = useNavigate();

  function handleClickCard() {
    navigate({
      pathname: "/insights/" + insightData!.id,
    });
  }
  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      <CardActionArea
        sx={{ display: "flex", flexDirection: "row", height: "100%" }}
        onClick={() => handleClickCard()}
      >
        <Stack width={180} padding={2} sx={{ justifyContent: "center" }}>
          <img
            src={insightData?.gambar}
            alt="Paris"
            height="100"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Stack>
        <CardContent
          sx={{
            textAlign: "left",
            width: "100%",
            paddingY:2
          }}
        >
          <Stack
            sx={{
              justifyContent: "space-between",
              height: "100%",
            }}
            direction={"column"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              paddingBottom={1}
            >
              <Typography component="div" fontSize={12}>
                {insightData?.namaPenulis}
              </Typography>
              <Typography component="div" fontSize={12}>
                {insightData?.tanggalPembuatan}
              </Typography>
            </Stack>
            <Typography component="div" fontSize={17}>
              {insightData?.judul.substring(0, 60) + '...'}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {insightData?.ringkasanKonten.substring(0, 55) + '...'}
            </Typography>
            <Stack direction={"row"} justifyContent={"end"}>
              <Typography component="div" fontSize={12}>
                views: {insightData?.views}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DashboardInsightCard;
