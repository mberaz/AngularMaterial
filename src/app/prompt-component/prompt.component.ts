import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  public enterdValue: string ;
  public title: string;
  public message: string;
  public placeholder: string;
  constructor(public dialogRef: MdDialogRef<PromptComponent>) {

  }
  ngOnInit() {
  }

}


