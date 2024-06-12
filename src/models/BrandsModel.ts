/* eslint-disable @typescript-eslint/no-explicit-any */
class BrandListPack {
  message!: string;
  status!: number;
  data!: BrandRecord[];

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: BrandRecord[] = [];
    if (json.data["brands"] !== null) {
      for (let i = 0; i < json.data.brands.length; i++) {
        temp.push(new BrandRecord(json.data.brands[i]));
      }
    }
    this.message = json.message;
    this.status = json.status;
    this.data = temp;
  }
}

class BrandRecord {
  merekId!: number;
  namaMerek!: string;
  logoMerek!: string;
  deskripsiMerek!: string;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.merekId = json["merek_id"];
    this.namaMerek = json["nama_merek"];
    this.logoMerek = json["logo_merek"];
    this.deskripsiMerek = json["deskripsi_merek"];
  }
}

export { BrandListPack, BrandRecord };
