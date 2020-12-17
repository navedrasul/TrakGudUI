import { ItemBatch } from './ItemBatch';

export class ReceivedItemBatch extends ItemBatch {
  receptionTS: number;
  supplierId: number;
  transactionId: number;
}
