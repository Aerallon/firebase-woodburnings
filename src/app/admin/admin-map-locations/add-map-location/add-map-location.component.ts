import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FirestoreService } from '../../../firestore.service';
import { MapLocationService } from '../map-location.service';

@Component({
    templateUrl: './add-map-location.component.html',
    styleUrls: ['./add-map-location.component.scss'],
    selector: 'add-map-location'
})

export class AddMapLocationsComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddMapLocationsComponent>,
              private mapLocationService: MapLocationService,
              private firestoreService: FirestoreService) {
    //
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'woodburningName': ['', Validators.required],
      'city': [''],
      'state': ['', Validators.required],
      'country': ['', Validators.required],
      'latitude': ['', Validators.required],
      'longitude': ['', Validators.required],
    });
  }

  addMapLocation(): void {
    if (this.form.valid) {
      const mapLocationFormData = {
        id: this.firestoreService.id,
        woodburningName: this.form.value.woodburningName,
        city: this.form.value.city,
        state: this.form.value.state,
        country: this.form.value.country,
        latitude: this.form.value.latitude,
        longitude: this.form.value.longitude,
      };
      this.mapLocationService.add(mapLocationFormData);
      // TODO: Have this or an error message show if the service isn't successful
      const message = 'Successfully added new map location entry.';
      this.mapLocationService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
      this.dialogRef.close();
  }
}
