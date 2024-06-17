import { Stack, Skeleton, Card, CardContent } from "@mui/material";
import React from "react";

const SkeletonInsightList: React.FC = () => {
  return (
    <Card sx={{ display: "flex", width: "680px", padding:0 }}>
      <Stack width={180} padding={2} sx={{ justifyContent: "center" }}>
        <Skeleton variant="rectangular" width={"100%"} height={100} />
      </Stack>
      <CardContent
        sx={{
          textAlign: "left",
          width: "100%",
        }}
      >
        <Stack direction={"column"} maxWidth="100%">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingBottom={1}
          >
            <Skeleton variant="text" width={100} height={40} />

            <Skeleton variant="text" width={100} height={40} />
          </Stack>

          <Skeleton variant="text" width={100} height={40} />

          <Skeleton variant="text" width={"100%"} height={40} />
          <Stack direction={"row"} justifyContent={"end"}>
            <Skeleton variant="text" width={40} height={40} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SkeletonInsightList;
