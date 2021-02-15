import { DialogDataBase } from './dialog-data-base';
import { IFormDialogEmbeddable } from './interfaces/i-form-dialog-embeddable';

export class FormDialogData extends DialogDataBase {
  embeddedFormComponent?: IFormDialogEmbeddable;
  payload?: any;

  title?: string;

  submitBtnText?: string;
  cancelBtnText?: string;

  submitBtnColor?: string;
  cancelBtnColor?: string;
}
