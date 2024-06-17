import {
  Card,
  CardContent,
  Stack,
  Skeleton,
} from "@mui/material";
import React from "react";

const SkeletonSideInsight: React.FC = () => {
  return (
    <Card sx={{ width: 200, padding: 2, bgcolor: "#CE8483" }}>
      <Skeleton variant="rectangular" width={"100%"} height={100} />
      <CardContent sx={{ padding: 0 }}>
        <Stack marginBottom={1} marginTop={0.5}>
          <Skeleton variant="text" width={100} height={30} />
        </Stack>
        <Skeleton variant="text" width={100} height={40} />
      </CardContent>
    </Card>
  );
};

export default SkeletonSideInsight;
