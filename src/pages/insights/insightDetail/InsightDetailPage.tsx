import React from "react";
import { useParams } from "react-router-dom";
import useGetDetailInsight from "./services/useGetDetailInsight";
import { Box, Stack, Typography } from "@mui/material";

const InsightDetailPage: React.FC = () => {
  const { id } = useParams();

  const { detailInsightData } = useGetDetailInsight({
    insightId: parseInt(id!),
  });

  return (
    detailInsightData && (
      <Stack paddingX={30} gap={5}>
        <Stack width={"100%"} justifyContent={"center"}>
          <Typography
            fontSize={24}
            fontWeight={700}
            color={"#674342"}
            marginBottom={2}
          >
            {detailInsightData.judul}
          </Typography>
          <Typography fontSize={16} color={"#964A52"}>
            {detailInsightData.namaPenulis}
          </Typography>
          <Typography fontSize={16} color={"#964A52"}>
            {detailInsightData.tanggalPembuatan}
          </Typography>
          <Box
            component="img"
            sx={{
              height: "400px",
              width: "auto",
              objectFit: "contain",
              marginTop: 2,
            }}
            alt="detail insight image"
            src={detailInsightData.gambar}
          />
        </Stack>

        <Typography
          fontSize={16}
          color={"#674342"}
          sx={{ whiteSpace: "break-spaces", textAlign: "justify" }}
        >
          {detailInsightData.konten.split("\\n").map(function (item, idx) {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          })}
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"end"} width={"100%"}>
          <Typography color={"#674342"} fontWeight={700}>
            Views: {detailInsightData.views}
          </Typography>
        </Stack>
      </Stack>
    )
  );
};
// new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)
export default InsightDetailPage;
