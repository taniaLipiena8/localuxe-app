/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideInsightCard from "../cards/SideInsightCard";
import { AxiosResponse } from "axios";
import { InsightListRecord } from "../../../../models/InsightListModel";
import axiosClient from "../../../../services/AxiosClient";

const RandomInsightBar: React.FC = () => {
  const [randomInsight, setRandomInsight] = useState<InsightListRecord[]>([])

  const getInsight = async () => {
    try {
      const response: AxiosResponse = await axiosClient.get(
        "/random_insights"
      );
      let responseData: InsightListRecord[] =
      response.data.data.randomInsights.map((json: any) => {
        return {
          id : json["id"],
          gambar : json["gambar"],
          judul : json["judul"],
          konten : json["konten"],
          link : json["link"],
          namaPenulis: json["nama_penulis"],
          ringkasanKonten: json["ringkasan_konten"],
          tanggalPembuatan: new Date(json["tanggal_pembuatan"]).toLocaleDateString(),
          views : json["views"],
        };
      });
      responseData = responseData.slice(0, 2);
      setRandomInsight(responseData)
      
    } catch (error) {
      console.log("Insight Error", error);
    }
  };

  useEffect(()=>{
    getInsight()
  },[])
  return (
    <Stack bgcolor={"#F8DAD9"} spacing={2} width={"fit-content"} padding={2}>
      <Typography fontSize={18} fontWeight={700} color={"#674342"}>
        OTHER ARTICLES
      </Typography>
      {randomInsight.map((insight) => (
        <SideInsightCard insight={insight} />
      ))}
    </Stack>
  );
};

export default RandomInsightBar;
