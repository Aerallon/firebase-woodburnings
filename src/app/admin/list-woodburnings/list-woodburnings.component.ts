import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WoodburningStoreService } from '../../woodburning-store.service';
import { WoodburningDetails } from '../../interfaces';
import { EditWoodburningComponent } from '../edit-woodburning/edit-woodburning.component';
import { DeleteWoodburningComponent } from '../delete-woodburning/delete-woodburning.component';
import { PreviewWoodburningComponent } from '../../preview-woodburning/preview-woodburning.component';
import { Observable } from 'rxjs';


@Component({
    templateUrl: './list-woodburnings.component.html',
    styleUrls: ['./list-woodburnings.component.scss'],
    selector: 'list-woodburnings'
})

export class ListWoodburningsComponent implements OnInit {

  public allWoodburnings$: Observable<WoodburningDetails[]>;
  deleteWoodburningDialogRef: MatDialogRef<DeleteWoodburningComponent>;
  editWoodburningDialogRef: MatDialogRef<EditWoodburningComponent>;
  previewWoodburningDialogRef: MatDialogRef<PreviewWoodburningComponent>;

  displayedColumns = ['title', 'size', 'material', 'dateFinished', 'totalTimeTakenMinutes',
    'totalTimeTakenHours', 'sharedOnline', 'framed', 'forSale', 'sellingPrice',
    'sold', 'etsyListing', 'isFeatured', 'menu'];

  constructor(private dialog: MatDialog,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
    this.allWoodburnings$ = this.woodburningStoreService.list();
  }

  public openPreviewDialog(woodburning: WoodburningDetails): void {
    this.previewWoodburningDialogRef = this.dialog.open(PreviewWoodburningComponent, { width: '550px' });
    this.previewWoodburningDialogRef.componentInstance.woodburning = woodburning;
  }

  public openEditWoodburningDialog(woodburning: WoodburningDetails): void {
    this.editWoodburningDialogRef = this.dialog.open(EditWoodburningComponent, { width: '500px' });
    this.editWoodburningDialogRef.componentInstance.woodburning = woodburning;
  }

  public openDeleteDialog(woodburning: WoodburningDetails): void {
    this.deleteWoodburningDialogRef = this.dialog.open(DeleteWoodburningComponent, { width: '500px' });
    this.deleteWoodburningDialogRef.componentInstance.woodburning = woodburning;
  }
}
