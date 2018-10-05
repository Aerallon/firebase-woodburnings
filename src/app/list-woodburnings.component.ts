import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WoodburningDetails, WoodburningStoreService } from './woodburning-store.service';
import { EditWoodburningComponent } from './edit-woodburning.component';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './list-woodburnings.component.html',
    styleUrls: ['./list-woodburnings.component.scss'],
    selector: 'list-woodburnings'
})

export class ListWoodburningsComponent implements OnInit {

  public allWoodburnings$: Observable<WoodburningDetails[]>;
  public singleWoodburning$: Observable<WoodburningDetails>;

  columns = [
    { columnDef: 'id', header: 'Title', cell: (woodburning: WoodburningDetails) => `${woodburning.id}` },
    { columnDef: 'title', header: 'Title', cell: (woodburning: WoodburningDetails) => `${woodburning.title}` },
    { columnDef: 'size', header: 'Size', cell: (woodburning: WoodburningDetails) => `${woodburning.size}` },
    { columnDef: 'material', header: 'Material', cell: (woodburning: WoodburningDetails) => `${woodburning.material}` },
    { columnDef: 'dateFinished', header: 'Date Finished', cell: (woodburning: WoodburningDetails) => `${woodburning.dateFinished}` },
    { columnDef: 'totalTimeTakenMinutes', header: 'Total Time (Mins)', cell: (woodburning: WoodburningDetails) => `${woodburning.totalTimeTakenMinutes}` },
    { columnDef: 'totalTimeTakenHours', header: 'Total Time (Hours)', cell: (woodburning: WoodburningDetails) => `${woodburning.totalTimeTakenHours}` },
    { columnDef: 'imageUrl', header: 'Image', cell: (woodburning: WoodburningDetails) => `${woodburning.imageUrl}` },
    { columnDef: 'sharedOnline', header: 'Online?', cell: (woodburning: WoodburningDetails) => `${woodburning.sharedOnline}` },
    { columnDef: 'framed', header: 'Framed?', cell: (woodburning: WoodburningDetails) => `${woodburning.framed}` },
    { columnDef: 'forSale', header: 'For Sale?', cell: (woodburning: WoodburningDetails) => `${woodburning.forSale}` },
    { columnDef: 'sellingPrice', header: 'Price', cell: (woodburning: WoodburningDetails) => `${woodburning.sellingPrice}` },
    { columnDef: 'sold', header: 'Sold?', cell: (woodburning: WoodburningDetails) => `${woodburning.sold}` }
  ];
  // TODO: Have a column for an actions column to edit and delete and preview

  /** Column definitions in order */
  readonly displayedColumns = this.columns.map(x => x.columnDef);

  constructor(private dialog: MatDialog,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
    this.singleWoodburning$ = this.woodburningStoreService.get('BRNhjBiolRvPS3agyx9X');
    this.allWoodburnings$ = this.woodburningStoreService.list();
  }

  // Will become a function that is called in the action kebab of each woodburning
  public openEditWoodburningDialog(): void {
    console.log('openEditWoodburningDialog');
    this.dialog.open(EditWoodburningComponent, { width: '500px' });
  }
}
