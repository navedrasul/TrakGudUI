export class ProductOffer {
  id: number;
  name: string;
  desc: string;
  price: number;
  validFromTS: Date;
  validToTS: Date;
  addTS: Date;
  adderId: number;
  modTS: Date;
  modderId: number;
  isRemoved: boolean;
}
