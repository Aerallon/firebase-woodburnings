import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WoodburningDetails } from '../interfaces';
import { WoodburningStoreService } from '../woodburning-store.service';
import { PreviewWoodburningComponent } from '../preview-woodburning/preview-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    selector: 'gallery'
})

export class GalleryComponent implements OnInit {

  public allWoodburnings$: Observable<WoodburningDetails[]>;
  previewWoodburningDialogRef: MatDialogRef<PreviewWoodburningComponent>;

  constructor(private woodburningStoreService: WoodburningStoreService,
              private dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    this.allWoodburnings$ = this.woodburningStoreService.list();
  }

  public openPreviewDialog(woodburning: WoodburningDetails): void {
    this.previewWoodburningDialogRef = this.dialog.open(PreviewWoodburningComponent, { width: '550px' });
    this.previewWoodburningDialogRef.componentInstance.woodburning = woodburning;
  }
}
