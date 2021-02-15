import { EventEmitter, Output } from '@angular/core';

export interface IPlainDialogEmbeddable {
  isPlainDialogEmbedded: boolean;

  closeDialog?: EventEmitter<void>;

  setDataFromPlainDialog?(data: any): void;

  loadingFailed?(): void;
  onPDialogInit?(): void;
  onPDialogClosing?(): void;
  onPDialogClosed?(): void;
}
