import { NumberCardComponent } from '@swimlane/ngx-charts';

export class Shipment {
  id: number;
  sourceId: number;
  destinationId: number;
  isShipmentComplete: number;
  sourceItemBatchId: number;
  destinationItemBatchId: number;
  suppervisorId: number;
  addTS: Date;
  adderId: number;
  modTS: Date;
  modderId: number;
  isRemoved: boolean;
}
