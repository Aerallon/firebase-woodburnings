import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { WoodburningStoreService } from '../woodburning-store.service';
import { WoodburningDetails } from '../interfaces';

@Component({
    templateUrl: './delete-woodburning.component.html',
    styleUrls: ['./delete-woodburning.component.scss'],
    selector: 'delete-woodburning'
})

export class DeleteWoodburningComponent implements OnInit {

  @Input() woodburning: WoodburningDetails;
  currentWoodburning: WoodburningDetails;

  constructor(public dialogRef: MatDialogRef<DeleteWoodburningComponent>,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
    this.currentWoodburning = this.woodburning;
  }

  deleteWoodburning(): void {
    this.woodburningStoreService.delete(this.currentWoodburning);
    const message = 'Successfully deleted ' + this.woodburning.title + '.';
    this.woodburningStoreService.openSnackBar(message, '');
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
