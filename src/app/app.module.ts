import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { DialogComponent } from '../app/dialog-component/dialog-component.component';

import 'hammerjs';
import { ConfirmComponentComponent } from './confirm-component/confirm-component.component';
import { DialogsService } from './dialog-service.service';
import { PromptComponent } from './prompt-component/prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ConfirmComponentComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    DialogsService
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    ConfirmComponentComponent,
     DialogComponent,
     PromptComponent
  ],
  exports: [
    ConfirmComponentComponent,
    PromptComponent
  ]
})
export class AppModule { }
