import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WoodburningDetails } from '../interfaces';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PreviewWoodburningComponent } from '../preview-woodburning/preview-woodburning.component';
import { WoodburningStoreService } from '../woodburning-store.service';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    selector: 'home-page'
})

export class HomePageComponent implements OnInit, OnDestroy {

  latestForSaleWoodburning$: Observable<WoodburningDetails[]>;
  latestForSaleWoodburnings: WoodburningDetails[];

  featuredWoodburning$: Observable<WoodburningDetails[]>;
  featuredWoodburnings: WoodburningDetails[];

  previewWoodburningDialogRef: MatDialogRef<PreviewWoodburningComponent>;

  private subscriptions: Subscription[] = [];

  constructor(private woodburningStoreService: WoodburningStoreService,
              private dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    this.latestForSaleWoodburning$ = this.woodburningStoreService.getLatestForSale();
    this.featuredWoodburning$ = this.woodburningStoreService.getFeatured();

    this.subscriptions.push(this.latestForSaleWoodburning$.subscribe(latestForSale =>
      this.latestForSaleWoodburnings = latestForSale)
    );

    this.subscriptions.push(this.featuredWoodburning$.subscribe(featuredWoodburnings =>
      this.featuredWoodburnings = featuredWoodburnings)
    );
  }

  public openPreviewDialog(woodburning: WoodburningDetails): void {
    this.previewWoodburningDialogRef = this.dialog.open(PreviewWoodburningComponent, { width: '550px' });
    this.previewWoodburningDialogRef.componentInstance.woodburning = woodburning;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
    });
  }
}
