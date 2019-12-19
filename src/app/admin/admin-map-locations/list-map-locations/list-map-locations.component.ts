import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MapLocationDetails } from '../../../interfaces';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapLocationService } from '../map-location.service';
import { DeleteMapLocationComponent } from '../delete-map-location/delete-map-location.component';
import { UpdateMapLocationComponent } from '../update-map-location/update-map-location.component';

@Component({
    templateUrl: './list-map-locations.component.html',
    styleUrls: ['./list-map-locations.component.scss'],
    selector: 'list-map-locations'
})

export class ListMapLocationsComponent implements OnInit {

  public allLocations$: Observable<MapLocationDetails[]>;
  deleteMapLocationDialogRef: MatDialogRef<DeleteMapLocationComponent>;
  updateMapLocationDialogRef: MatDialogRef<UpdateMapLocationComponent>;

  displayedColumns = ['woodburningName', 'city', 'state', 'country', 'latitude', 'longitude', 'menu'];

  constructor(private mapLocationService: MapLocationService,
              private dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    this.allLocations$ = this.mapLocationService.list();
  }

  openUpdateMapLocationDialog(location: MapLocationDetails): void {
    this.updateMapLocationDialogRef = this.dialog.open(UpdateMapLocationComponent, { width: '500px' });
    this.updateMapLocationDialogRef.componentInstance.location = location;
  }

  openDeleteDialog(location: MapLocationDetails): void {
    this.deleteMapLocationDialogRef = this.dialog.open(DeleteMapLocationComponent, { width: '500px' });
    this.deleteMapLocationDialogRef.componentInstance.location = location;
  }
}
