import { Type } from '@angular/core';
import { DialogDataBase } from './dialog-data-base';
import { IPlainDialogEmbeddable } from './interfaces/i-plain-dialog-embeddable';

export class PlainDialogData extends DialogDataBase {
  embeddedComponentClass?: Type<IPlainDialogEmbeddable>;
  payload?: any;
}
