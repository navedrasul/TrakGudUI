export class User {
  id: number;
  username: string;
  passwordHash: string;
  isDisabled: boolean;
  fullName: string;
  employeeId: number;
  addTS: Date;
  adderId: number;
  modTS: Date;
  modderId: number;
  isRemoved: boolean;
}
