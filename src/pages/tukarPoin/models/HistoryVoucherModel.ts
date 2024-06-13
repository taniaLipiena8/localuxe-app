import { VoucherListRecord } from "./VoucherModel";

/* eslint-disable @typescript-eslint/no-explicit-any */
class HistoryVoucherListPack {
  message!: string;
  status!: number;
  data!: HistoryVoucherData[];

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    const temp: HistoryVoucherData[] = [];
    if (json.data["historyVouchers"] !== null) {
      for (let i = 0; i < json.data.historyVouchers.length; i++) {
        temp.push(new HistoryVoucherData(json.data.historyVouchers[i]));
      }
    }
    this.message = json.message;
    this.status = json.status;
    this.data = temp;
  }
}

class HistoryVoucherData {
  voucherDetailId!: number;
  voucherId!: number;
  userId!: number;
  dipakai!: boolean;
  voucher!: VoucherListRecord;

  constructor(json: any) {
    this.mapFromJson(json);
  }

  mapFromJson(json: any) {
    this.voucherDetailId = json.voucher_detail_id;
    this.voucherId = json.voucher_id;
    this.userId = json.user_id;
    this.dipakai = json.dipakai;
    this.voucher = new VoucherListRecord(json.voucher);
  }
}

export { HistoryVoucherListPack, HistoryVoucherData };
