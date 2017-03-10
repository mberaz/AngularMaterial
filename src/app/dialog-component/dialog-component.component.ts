import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-component.component.html',
})
export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) { }
}
