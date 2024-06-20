import {
  Box,
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
  randomInsight: InsightListRecord;
}

const RandomInsightCard: React.FC<Props> = ({ randomInsight }) => {
  const navigate = useNavigate();

  function handleClickCard() {
    navigate({
      pathname: "/insights/" + randomInsight!.id,
    });
  }

  return (
    <Stack width={"100%"} height={"100%"}>
      <Card sx={{ display: "flex", width: "100%", height: "100%" }}>
        <CardActionArea
          sx={{ display: "flex", flexDirection: "row", height: "100%" }}
          onClick={() => handleClickCard()}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                bgcolor: "#fcf3f2",
              }}
            >
              <Stack gap={2} padding={2}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {randomInsight.namaPenulis}
                </Typography>
                <Typography
                  component="div"
                  variant="h4"
                  color={"#674342"}
                  fontWeight={700}
                >
                  {randomInsight.judul}
                </Typography>
                <Typography component="div" variant="h5" color={"#674342"}>
                  {randomInsight.ringkasanKonten}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
          <img
            src={randomInsight.gambar}
            alt="gambar random insight"
            width="40%"
            style={{ objectFit: "cover" }}
            height="100%"
          />
        </CardActionArea>
      </Card>
    </Stack>
  );
};

export default RandomInsightCard;
