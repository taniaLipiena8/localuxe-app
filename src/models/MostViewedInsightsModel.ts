/* eslint-disable @typescript-eslint/no-explicit-any */
import { InsightListRecord } from "./InsightListModel";

class MostViewedInsightPack {
  message!: string;
  status!: number;
  data!: InsightListRecord[];

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: InsightListRecord[] = [];

    if (json.data["mostViewedInsights"] !== null) {
      for (let i = 0; i < json.data.mostViewedInsights.length; i++) {
        temp.push(new InsightListRecord(json.data.mostViewedInsights[i]));
      }
    }
    this.message = json.message;
    this.status = json.status;
    this.data = temp;
  }
}

export { MostViewedInsightPack };
