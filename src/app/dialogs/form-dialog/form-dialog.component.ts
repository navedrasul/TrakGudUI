import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormDialogData } from 'src/app/models/form-dialog-data';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData) { }

  ngOnInit(): void {
    // Todo: Initialise the embedded-form-component.
    // Todo: Set the isFormDialogEmbedded property of the embedded-form-component to true.
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmitClick(): void{
    // Call the submit event-listener method of the form.
    this.data.embeddedFormComponent.onFormDialogSubmit();

    this.dialogRef.close();
  }

}
