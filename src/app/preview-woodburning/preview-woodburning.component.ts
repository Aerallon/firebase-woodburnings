import { Component, Input } from '@angular/core';
import { WoodburningDetails } from '../interfaces';
import { MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './preview-woodburning.component.html',
    styleUrls: ['./preview-woodburning.component.scss'],
    selector: 'preview-woodburning'
})

export class PreviewWoodburningComponent {

    @Input() woodburning: WoodburningDetails;

    constructor(public dialogRef: MatDialogRef<PreviewWoodburningComponent>) {}

    close(): void {
        this.dialogRef.close();
    }
}
