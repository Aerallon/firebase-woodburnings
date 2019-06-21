import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WoodburningDetails } from '../interfaces';
import { WoodburningStoreService } from '../woodburning-store.service';


@Component({
    templateUrl: './for-sale.component.html',
    styleUrls: ['./for-sale.component.scss'],
    selector: 'for-sale'
})

export class ForSaleComponent implements OnInit {

  public forSaleWoodburnings$: Observable<WoodburningDetails[]>;

  constructor(private woodburningStoreService: WoodburningStoreService) {
    //
  }

  ngOnInit(): void {
    this.forSaleWoodburnings$ = this.woodburningStoreService.listForSale();
  }
}
