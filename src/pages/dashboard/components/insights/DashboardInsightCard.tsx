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
    <Card sx={{ display: "flex", width: "100%", height: "130px" }}>
      <CardActionArea
        sx={{ display: "flex", flexDirection: "row", height: "100%" }}
        onClick={() => handleClickCard()}
      >
        <Stack width={150} padding={1} sx={{ justifyContent: "center" }}>
          <img
            src={insightData?.gambar}
            alt="Paris"
            height="65%"
            width="100%"
            style={{ objectFit: "cover" }}
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
      </CardActionArea>
    </Card>
  );
};

export default DashboardInsightCard;
