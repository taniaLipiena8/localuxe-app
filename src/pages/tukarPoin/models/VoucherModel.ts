/* eslint-disable @typescript-eslint/no-explicit-any */
class VoucherListPack {
  message!: string;
  status!: number;
  data!: VoucherListRecord[];

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: VoucherListRecord[] = [];
    if (json.data["vouchers"] !== null) {
      for (let i = 0; i < json.data.vouchers.length; i++) {
        temp.push(new VoucherListRecord(json.data.vouchers[i]));
      }
    }
    this.message = json.message;
    this.status = json.status;
    this.data = temp;
  }
}

class VoucherListRecord {
  voucherId!: number;
  namaVoucher!: string;
  deskripsi!: string;
  poinDibutuhkan!: number;
  periodeAwal!: string;
  periodeAkhir!: string;
  gambarVoucher!: string;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.voucherId = json.voucher_id;
    this.namaVoucher = json.nama_voucher;
    this.deskripsi = json.deskripsi;
    this.poinDibutuhkan = json.poin_dibutuhkan;
    this.periodeAwal = `${new Date(json["periode_awal"])
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-")}`;
    this.periodeAkhir = `${new Date(json["periode_akhir"])
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-")}`;
    this.gambarVoucher = json["gambar"];
  }
}

export { VoucherListPack, VoucherListRecord };
