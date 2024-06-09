/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardInsightCard from "./DashboardInsightCard";
import { AxiosResponse } from "axios";
import { InsightListRecord } from "../../../../models/InsightListModel";
import axiosClient from "../../../../services/AxiosClient";

const LatestInsight: React.FC = () => {
  const [latestInsights, setLatesInsights] = useState<InsightListRecord[]>([]);
  const getInsight = async () => {
    try {
      const response: AxiosResponse = await axiosClient.get("/latest");
      const responseData: InsightListRecord[] =
        response.data.data.lastedInsights.map((json: any) => {
          return {
            id: json["id"],
            gambar: json["gambar"],
            judul: json["judul"],
            konten: json["konten"],
            link: json["link"],
            namaPenulis: json["nama_penulis"],
            ringkasanKonten: json["ringkasan_konten"],
            tanggalPembuatan: new Date(
              json["tanggal_pembuatan"]
            ).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'short', year: 'numeric'
            }).replace(/ /g, '-'),
            views: json["views"],
          };
        });
      setLatesInsights(responseData);
    } catch (error) {
      console.log("Insight Error", error);
    }
  };

  useEffect(() => {
    getInsight();
  }, []);
  return (
    <Stack spacing={3} paddingRight={5} paddingTop={3} paddingBottom={5}>
      <Typography
        fontSize={32}
        color={"#674342"}
        fontWeight={600}
        textAlign={"left"}
        borderBottom={1}
        borderColor={"#674342"}
      >
        Latest Articles
      </Typography>
      <Stack spacing={3}>
        {latestInsights.map((insight) => (
          <DashboardInsightCard insightData={insight} key={insight.id}/>
        ))}
      </Stack>
    </Stack>
  );
};

export default LatestInsight;
