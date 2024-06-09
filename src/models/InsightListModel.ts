/* eslint-disable @typescript-eslint/no-explicit-any */
class InsightListPack {
  message!: string;
  status!: number;
  data!: InsightListData;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.message = json.message;
    this.status = json.status;
    this.data = new InsightListData(json.data);
  }
}

class InsightListData {
  insights!: InsightListRecord[];
  total_page!: number;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: InsightListRecord[] = [];

    if (json["insights"] !== null) {
      for (let i = 0; i < json.insights.length; i++) {
        temp.push(new InsightListRecord(json.insights[i]));
      }
    }

    this.insights = temp;
    this.total_page = json["count"];
  }
}

class InsightListRecord {
  id!: number;
  gambar!: string;
  judul!: string;
  konten!: string;
  link!: string;
  namaPenulis!: string;
  ringkasanKonten!: string;
  tanggalPembuatan!: string;
  views!: number;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.id = json["id"];
    this.gambar = json["gambar"];
    this.judul = json["judul"];
    this.konten = json["konten"];
    this.link = json["link"];
    this.namaPenulis = json["nama_penulis"];
    this.ringkasanKonten = json["ringkasan_konten"];
    this.tanggalPembuatan = new Date(json["tanggal_pembuatan"]).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      }).replace(/ /g, '-');
    this.views = json["views"];
  }
}

export { InsightListPack, InsightListData, InsightListRecord };
