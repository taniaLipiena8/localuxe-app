import { VoucherListRecord } from "./VoucherModel";

/* eslint-disable @typescript-eslint/no-explicit-any */
class ClaimedVoucherListPack {
  message!: string;
  status!: number;
  data!: ClaimedVoucherData[];

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: ClaimedVoucherData[] = [];
    if (json.data["claimedVouchers"] !== null) {
      for (let i = 0; i < json.data.claimedVouchers.length; i++) {
        temp.push(new ClaimedVoucherData(json.data.claimedVouchers[i]));
      }
    }
    this.message = json.message;
    this.status = json.status;
    this.data = temp;
  }
}

class ClaimedVoucherData {
  voucherDetailId!: number;
  voucherId!: number;
  userId!: number;
  dipakai!: boolean;
  voucherCode!: string;
  voucher!: VoucherListRecord;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.voucherDetailId = json.voucher_detail_id;
    this.voucherId = json.voucher_id;
    this.voucherCode = json.voucher_code;
    this.userId = json.user_id;
    this.dipakai = json.dipakai;
    this.voucher = new VoucherListRecord(json.voucher);
  }
}

export { ClaimedVoucherListPack, ClaimedVoucherData };
