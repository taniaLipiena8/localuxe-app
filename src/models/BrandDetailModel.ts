/* eslint-disable @typescript-eslint/no-explicit-any */
class BrandDetailPack {
  message!: string;
  status!: number;
  data!: BrandDetailData;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.message = json.message;
    this.status = json.status;
    this.data = new BrandDetailData(json.data.brandDetail);
  }
}

class BrandDetailData {
  merekId!: number;
  namaMerek!: string;
  logoMerek!: string;
  deskripsiMerek!: string;
  mediaSocial!: SocialMediaData[];

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: SocialMediaData[] = [];
    if (json["media_sosial"] !== null) {
      for (let i = 0; i < json.media_sosial.length; i++) {
        temp.push(new SocialMediaData(json.media_sosial[i]));
      }
    }

    this.merekId = json["merek_id"];
    this.namaMerek = json["nama_merek"];
    this.logoMerek = json["logo_merek"];
    this.deskripsiMerek = json["deskripsi"];
    this.mediaSocial = temp;
  }
}

class SocialMediaData {
  namaMediaSosial!: string;
  logoMediaSosial!: string;
  linkMediaSosial!: string;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.namaMediaSosial = json["nama_media_sosial"];
    this.logoMediaSosial = json["logo_media_sosial"];
    this.linkMediaSosial = json["link_media_sosial"];
  }
}

export { BrandDetailPack, BrandDetailData, SocialMediaData };
