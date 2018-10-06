import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WoodburningStoreService } from './woodburning-store.service';
import { WoodburningDetails } from './interfaces';
import { EditWoodburningComponent } from './edit-woodburning.component';
import { DeleteWoodburningComponent } from './delete-woodburning.component';
import { Observable } from 'rxjs';


@Component({
    templateUrl: './list-woodburnings.component.html',
    styleUrls: ['./list-woodburnings.component.scss'],
    selector: 'list-woodburnings'
})

export class ListWoodburningsComponent implements OnInit {

  public allWoodburnings$: Observable<WoodburningDetails[]>;
  deleteWoodburningDialogRef: MatDialogRef<DeleteWoodburningComponent>;

  displayedColumns = ['title', 'size', 'material', 'dateFinished', 'totalTimeTakenMinutes',
    'totalTimeTakenHours', 'sharedOnline', 'framed', 'forSale', 'sellingPrice',
    'sold', 'menu'];

  constructor(private dialog: MatDialog,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
    this.allWoodburnings$ = this.woodburningStoreService.list();
  }

  public openPreviewDialog(woodburning: WoodburningDetails): void {
    console.log('openPreviewDialog');
    console.log(woodburning);
    // this.dialog.open(PreviewWoodburningComponent, { width: '500px' });
  }

  public openEditWoodburningDialog(woodburning: WoodburningDetails): void {
    console.log('openEditWoodburningDialog');
    console.log(woodburning);
    this.dialog.open(EditWoodburningComponent, { width: '500px' });
  }

  public openDeleteDialog(woodburning: WoodburningDetails): void {
    this.deleteWoodburningDialogRef = this.dialog.open(DeleteWoodburningComponent, { width: '500px' });
    this.deleteWoodburningDialogRef.componentInstance.woodburning = woodburning;
  }
}
