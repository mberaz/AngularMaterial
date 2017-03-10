import { Observable } from 'rxjs/Rx';
import { ConfirmComponentComponent } from './confirm-component/confirm-component.component';
import { PromptComponent } from './prompt-component/prompt.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {
        let dialogRef: MdDialogRef<ConfirmComponentComponent>;

        dialogRef = this.dialog.open(ConfirmComponentComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public prompt(title: string, message: string, placeholder: string): Observable<string> {
        let dialogRef: MdDialogRef<PromptComponent>;

        dialogRef = this.dialog.open(PromptComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.placeholder = placeholder;
        return dialogRef.afterClosed();
    }
}