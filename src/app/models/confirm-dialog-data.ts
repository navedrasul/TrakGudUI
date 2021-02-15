import { DialogDataBase } from './dialog-data-base';

export class ConfirmDialogData extends DialogDataBase {
  title?: string;
  message?: string;

  confirmBtnText?: string;
  cancelBtnText?: string;

  confirmBtnColor?: string;
  cancelBtnColor?: string;
}
