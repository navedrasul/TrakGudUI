import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogOptions } from '../models/confirm-dialog-options';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;

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
}
