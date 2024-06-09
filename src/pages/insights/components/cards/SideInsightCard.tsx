import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { InsightListRecord } from "../../../../models/InsightListModel";

interface Props{
  insight: InsightListRecord | null
}

const SideInsightCard: React.FC<Props> = ({insight}) => {
  return (
    <Card sx={{ width: 200, padding: 2, bgcolor: "#CE8483" }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="100"
          image={insight?.gambar}
          alt="random insight image"
        />
        <CardContent sx={{ padding: 0, marginTop: 2 }}>
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
