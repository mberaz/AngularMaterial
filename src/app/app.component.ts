import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogComponent } from '../app/dialog-component/dialog-component.component';
import { DialogsService } from './dialog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  spaceScreens: Array<any>;
  sliderValue = 18;
  hideSlider: false;
  selectedOption: string;
  optionColor = 'black';
  result: any;
  prompedText: string;

  constructor(private http: Http, public dialog: MdDialog, private dialogsService: DialogsService) {
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  openOptionsDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedOption = result.option;
        this.optionColor = result.color;
      }
    });
  }

  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Select option 1?')
      .subscribe(res => {
        this.selectedOption = 'option ' + (res ? '1' : '2');
        this.optionColor = res ? 'red' : 'green';
      });
  }

  public prompForText() {
    this.dialogsService
      .prompt('Prompt Dialog', 'Please enter text', 'Enter text here')
      .subscribe(res => {
        this.prompedText = res;
      });

  }
  likeMe(i) {
    this.spaceScreens[i].liked = this.spaceScreens[i].liked === '0' ? '1' : '0';
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }
}


