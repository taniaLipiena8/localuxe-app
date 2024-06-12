import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { InsightListRecord } from "../../../../../models/InsightListModel";
import { useNavigate } from "react-router-dom";

interface Props {
  insight: InsightListRecord | null;
}

const SideInsightCard: React.FC<Props> = ({ insight }) => {
  const navigate = useNavigate();

  function handleClickCard() {
    navigate({
      pathname: "/insights/" + insight!.id,
    });
  }
  return (
    <Card sx={{ width: 200, padding: 2, bgcolor: "#CE8483" }}>
      <CardActionArea onClick={handleClickCard}>
        <CardMedia
          component="img"
          height="100"
          image={insight?.gambar}
          alt="random insight image"
        />
        <CardContent sx={{ padding: 0 }}>
          <Stack marginBottom={1} marginTop={0.5}>
            <Typography fontSize={12} textAlign={"right"} width={"100%"}>
              {insight?.namaPenulis}
            </Typography>
          </Stack>
          <Typography
            fontSize={16}
            textAlign={"left"}
            width={"100%"}
            color={"white"}
          >
            {insight?.judul}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SideInsightCard;
