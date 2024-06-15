/* eslint-disable @typescript-eslint/no-explicit-any */
class InsightDetailPack {
  message!: string;
  status!: number;
  data!: InsightDetailData;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.message = json.message;
    this.status = json.status;
    this.data = new InsightDetailData(json.data.insight);
  }
}

class InsightDetailData {
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
  //   string.split('\n').map((item, index) => {
  //     return (index === 0) ? item : [<br key={index} />, item]
  //   }
  mapFromJson(json: any) {
    this.id = json["id"];
    this.gambar = json["gambar"];
    this.judul = json["judul"];
    this.konten = json["konten"];
    this.link = json["link"];
    this.views = json["views"];
    this.namaPenulis = json["nama_penulis"];
    this.ringkasanKonten = json["ringkasan_konten"];
    this.tanggalPembuatan = `${new Date(json["tanggal_pembuatan"])
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-")} at ${new Date(
      json["tanggal_pembuatan"]
    ).toLocaleTimeString("it-IT")}`;
  }
}

export { InsightDetailPack, InsightDetailData };
