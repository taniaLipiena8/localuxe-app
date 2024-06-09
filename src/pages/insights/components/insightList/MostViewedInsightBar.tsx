/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideInsightCard from "../cards/SideInsightCard";
import { AxiosResponse } from "axios";
import axiosClient from "../../../../services/AxiosClient";
import { InsightListRecord } from "../../../../models/InsightListModel";

const MostViewedInsightBar: React.FC = () => {
  const [mostViewed, setMostViewed] = useState<InsightListRecord[]>([]);

  const getInsight = async () => {
    try {
      const response: AxiosResponse = await axiosClient.get("/most_viewed");
      let responseData: InsightListRecord[] =
        response.data.data.mostViewedInsights.map((json: any) => {
          return {
            id: json["id"],
            gambar: json["gambar"],
            judul: json["judul"],
            konten: json["konten"],
            link: json["link"],
            namaPenulis: json["nama_penulis"],
            ringkasanKonten: json["ringkasan_konten"],
            tanggalPembuatan: new Date(json["tanggal_pembuatan"]).toLocaleDateString(),
            views: json["views"],
          };
        });
      responseData = responseData.slice(0, 2);
      setMostViewed(responseData);
    } catch (error) {
      console.log("Insight Error", error);
    }
  };
  console.log(mostViewed);

  useEffect(() => {
    getInsight();
  }, []);

  return (
    <Stack bgcolor={"#F8DAD9"} spacing={2} width={"fit-content"} padding={2}>
      <Typography fontSize={18} fontWeight={700} color={"#674342"}>
        MOST VIEWED
      </Typography>
      {mostViewed.map((insight) => (
        <SideInsightCard insight={insight} />
      ))}
    </Stack>
  );
};

export default MostViewedInsightBar;
