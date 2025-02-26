import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetDetailInsight from "./services/useGetDetailInsight";
import { Link, Box, Button, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const InsightDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { detailInsightData } = useGetDetailInsight({
    insightId: parseInt(id!),
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    detailInsightData && (
      <Stack paddingX={30} gap={5}>
        <Stack width={"100%"} justifyContent={"center"}>
          <Stack justifyContent={"start"}>
            <Button
              sx={{ width: "30px" }}
              startIcon={<ChevronLeftIcon fontSize="medium" />}
              onClick={handleBack}
            >
              Back
            </Button>
          </Stack>
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
        {detailInsightData.link && (
          <Stack
            flexDirection={"column"}
            justifyContent={"start"}
            width={"100%"}
            alignItems={"start"}
          >
            <Typography color={"#674342"}>Sumber dari:</Typography>
            <Link href={detailInsightData.link}>{detailInsightData.link}</Link>
          </Stack>
        )}

        <Stack flexDirection={"row"} justifyContent={"end"} width={"100%"}>
          <Typography color={"#674342"} fontWeight={700}>
            Views: {detailInsightData.views + 1}
          </Typography>
        </Stack>
      </Stack>
    )
  );
};
export default InsightDetailPage;
