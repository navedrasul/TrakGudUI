import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { PlainDialogComponent } from '../dialogs/plain-dialog/plain-dialog.component';
import { ConfirmDialogOptions } from '../models/confirm-dialog-options';
import { PlainDialogOptions } from '../models/plain-dialog-options';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  plainDialogRef: MatDialogRef<PlainDialogComponent>;

  constructor(
    private logger: LoggerService,
    public dialog: MatDialog
  ) { }

  openConfirmDialog(options: ConfirmDialogOptions): MatDialogRef<ConfirmDialogComponent>{
    this.confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: options.width,
      data: options.data
    });

    return this.confirmDialogRef;
  }

  openPlainDialog(options: PlainDialogOptions): MatDialogRef<PlainDialogComponent> {
    this.plainDialogRef = this.dialog.open(PlainDialogComponent, {
      width: options.width,
      data: options.data
    });

    return this.plainDialogRef;
  }
}
