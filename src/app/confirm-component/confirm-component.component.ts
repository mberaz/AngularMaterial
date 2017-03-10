import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-component.component.html',
  styleUrls: ['./confirm-component.component.css']
})
export class ConfirmComponentComponent implements OnInit {

  public title: string;
  public message: string;
public placeHolder: string;
  constructor(public dialogRef: MdDialogRef<ConfirmComponentComponent>) {

  }
  ngOnInit() {
  }

}
