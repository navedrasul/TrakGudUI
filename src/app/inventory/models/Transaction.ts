export class Transaction {
  id: number;
  TS: Date;
  type: string;
  RCT: string;
  RST: string;
  paymentId: number;
  addTS: Date;
  adderId: number;
  modTS: Date;
  modderId: number;
  isRemoved: boolean;
}
