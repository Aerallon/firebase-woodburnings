import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MapLocationDetails } from '../../../interfaces';
import { MapLocationService } from '../map-location.service';

@Component({
    templateUrl: './interactive-map.component.html',
    styleUrls: ['./interactive-map.component.scss'],
    selector: 'interactive-map'
})

export class InteractiveMapComponent implements OnInit {

  // Domremy
  lng: number = -105.733333;
  lat: number = 52.783333;

  allMapLocations$: Observable<MapLocationDetails[]>;

  constructor(private mapLocationService: MapLocationService) {
    //
  }

  ngOnInit(): void {
    this.allMapLocations$ = this.mapLocationService.list();
  }
}
