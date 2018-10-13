import { Component, Input, OnInit } from '@angular/core';
import { WoodburningDetails } from '../interfaces';
import { MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './preview-woodburning.component.html',
    styleUrls: ['./preview-woodburning.component.scss'],
    selector: 'preview-woodburning'
})

export class PreviewWoodburningComponent implements OnInit {

    @Input() woodburning: WoodburningDetails;
    currentWoodburning: WoodburningDetails;

    constructor(public dialogRef: MatDialogRef<PreviewWoodburningComponent>) {}

    ngOnInit(): void {
        this.currentWoodburning = this.woodburning;
    }

    close(): void {
        this.dialogRef.close();
    }
}
