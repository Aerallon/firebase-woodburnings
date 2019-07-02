import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MapLocationDetails } from '../../../interfaces';
import { MapLocationService } from '../map-location.service';

@Component({
    templateUrl: './delete-map-location.component.html',
    styleUrls: ['./delete-map-location.component.scss'],
    selector: 'delete-map-location'
})

export class DeleteMapLocationComponent {

  @Input() location: MapLocationDetails;

  constructor(public dialogRef: MatDialogRef<DeleteMapLocationComponent>,
              private mapLocationService: MapLocationService) {
  }

  deleteLocation(): void {
    this.mapLocationService.delete(this.location);
    // TODO: Listen to the delete call and show proper success or error message depending on the call
    const message = 'Successfully deleted ' + this.location.city + ', ' +
      this.location.state + ', ' + this.location.country + '.';
    this.mapLocationService.openSnackBar(message, '');
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
