import { Component } from '@angular/core';
import { AddMapLocationsComponent } from './add-map-location/add-map-location.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './admin-map-locations.component.html',
    styleUrls: ['./admin-map-locations.component.scss'],
    selector: 'admin-map-locations'
})

export class AdminMapLocationsComponent {

  addMapLocationDialogRef: MatDialogRef<AddMapLocationsComponent>;

  constructor(private dialog: MatDialog) {
  }

  openAddMapLocationDialog(): void {
    this.addMapLocationDialogRef = this.dialog.open(AddMapLocationsComponent, { width: '500px' });
  }
}
