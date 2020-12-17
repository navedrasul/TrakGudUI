import { ItemBatch } from './ItemBatch';

export class RemovedItemBatch extends ItemBatch {
  removalTS: Date;
  removalReason: string;
}
