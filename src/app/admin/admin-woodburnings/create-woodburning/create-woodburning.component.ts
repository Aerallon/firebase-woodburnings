import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { WoodburningStoreService } from '../../../woodburning-store.service';
import { FirestoreService } from '../../../firestore.service';

@Component({
    templateUrl: './create-woodburning.component.html',
    styleUrls: ['./create-woodburning.component.scss'],
    selector: 'create-woodburning'
})

export class CreateWoodburningComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CreateWoodburningComponent>,
              private woodburningStoreService: WoodburningStoreService,
              private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'size': ['', Validators.required],
      'material': ['', Validators.required],
      'dateFinished': ['', Validators.required],
      'totalTimeTakenMinutes': ['', Validators.required],
      'totalTimeTakenHours': ['', Validators.required],
      'imageUrl': ['', Validators.required],
      'sharedOnline': [false],
      'isFeatured': [false],
      'framed': [false],
      'forSale': [false],
      'sellingPrice': [''], // TODO: Should only be required if for sale is true
      'sold': [false],
      'etsyListing': [''] // TODO: Should only be required if for sale is true
    });
  }

  createWoodburning(): void {
    if (!this.form.valid) {
      const message = 'Not all fields were entered. Fill out required.';
      this.woodburningStoreService.openSnackBar(message, '');
    } else {
      const woodburningFormData = {
        id: this.firestoreService.id,
        title: this.form.value.title,
        size: this.form.value.size,
        material: this.form.value.material,
        dateFinished: this.form.value.dateFinished,
        totalTimeTakenMinutes: this.form.value.totalTimeTakenMinutes,
        totalTimeTakenHours: this.form.value.totalTimeTakenHours,
        imageUrl: this.form.value.imageUrl,
        sharedOnline: this.form.value.sharedOnline,
        isFeatured: this.form.value.isFeatured,
        framed: this.form.value.framed,
        forSale: this.form.value.forSale,
        sellingPrice: this.form.value.sellingPrice,
        sold: this.form.value.sold,
        etsyListing: this.form.value.etsyListing
      };
      this.woodburningStoreService.add(woodburningFormData);
      const message = 'Successfully created new woodburning entry.';
      this.woodburningStoreService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
      this.dialogRef.close();
  }
}
