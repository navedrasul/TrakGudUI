import { Payment } from './Payment';

export class ChequePayment extends Payment {
  isBounced: boolean;
  chequeId: number;
}
