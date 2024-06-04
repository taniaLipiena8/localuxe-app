import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const DashboardInsightCard: React.FC = () => {
  return (
    <Card sx={{ display: "flex", width: "100%", height: "130px" }}>
      <CardMedia
        component="img"
        sx={{ width: 80, objectFit: "contain", padding: 2 }}
        image="/placeholderImage.png"
        alt="insight image"
      />
      <CardContent
        sx={{
          textAlign: "left",
          justifyContent: "space-between",
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
            Merk Fashion Lokal Di Indonesia Berkembang Pesat
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Senin, 06 Mei 2024
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DashboardInsightCard;
