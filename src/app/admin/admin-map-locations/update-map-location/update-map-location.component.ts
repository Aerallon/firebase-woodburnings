import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MapLocationDetails } from '../../../interfaces';
import { MapLocationService } from '../map-location.service';

@Component({
    templateUrl: './update-map-location.component.html',
    styleUrls: ['./update-map-location.component.scss'],
    selector: 'update-map-location'
})

export class UpdateMapLocationComponent implements OnInit {

  @Input() location: MapLocationDetails;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UpdateMapLocationComponent>,
              private mapLocationService: MapLocationService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'woodburningName': [this.location.woodburningName],
      'city': [this.location.city],
      'state': [this.location.state],
      'country': [this.location.country],
      'latitude': [this.location.latitude],
      'longitude': [this.location.longitude],
    });
  }

  updateMapLocation(): void {
    if (this.form.valid) {
      const mapLocationFormData = {
        id: this.location.id,
        woodburningName: this.form.value.woodburningName,
        city: this.form.value.city,
        state: this.form.value.state,
        country: this.form.value.country,
        latitude: this.form.value.latitude,
        longitude: this.form.value.longitude,
      };
      this.mapLocationService.update(mapLocationFormData);
      // TODO: Handle error message if something goes wrong with the update - success will currently always be shown
      const message = 'Successfully updated ' + mapLocationFormData.city + ', '  +
        mapLocationFormData.state + ', ' + mapLocationFormData.country + '.';
      this.mapLocationService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
