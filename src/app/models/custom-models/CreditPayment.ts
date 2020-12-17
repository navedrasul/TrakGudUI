import { Payment } from './Payment';

export class CreditPayment extends Payment {
  receivedAmt: number;
  dueDate: Date;
}
