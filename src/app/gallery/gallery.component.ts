import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WoodburningDetails } from '../interfaces';
import { WoodburningStoreService } from '../woodburning-store.service';


@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    selector: 'gallery'
})

export class GalleryComponent implements OnInit {

  public allWoodburnings$: Observable<WoodburningDetails[]>;

  constructor(private woodburningStoreService: WoodburningStoreService) {
    //
  }

  ngOnInit(): void {
    this.allWoodburnings$ = this.woodburningStoreService.list();
  }
}
