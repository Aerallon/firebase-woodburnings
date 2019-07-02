import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WoodburningStoreService } from '../../../woodburning-store.service';
import { WoodburningDetails } from '../../../interfaces';

@Component({
    templateUrl: './edit-woodburning.component.html',
    styleUrls: ['./edit-woodburning.component.scss'],
    selector: 'edit-woodburning'
})

export class EditWoodburningComponent implements OnInit {

  @Input() woodburning: WoodburningDetails;
  currentWoodburning: WoodburningDetails;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditWoodburningComponent>,
              private woodburningStoreService: WoodburningStoreService) {
  }

  ngOnInit(): void {
    this.currentWoodburning = this.woodburning;
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'title': [this.currentWoodburning.title, Validators.required],
      'size': [this.currentWoodburning.size, Validators.required],
      'material': [this.currentWoodburning.material, Validators.required],
      'dateFinished': [this.currentWoodburning.dateFinished.toDate(), Validators.required],
      'totalTimeTakenMinutes': [this.currentWoodburning.totalTimeTakenMinutes, Validators.required],
      'totalTimeTakenHours': [this.currentWoodburning.totalTimeTakenHours, Validators.required],
      'imageUrl': [this.currentWoodburning.imageUrl, Validators.required],
      'sharedOnline': [this.currentWoodburning.sharedOnline, Validators.required],
      'isFeatured': [this.currentWoodburning.isFeatured, Validators.required],
      'framed': [this.currentWoodburning.framed, Validators.required],
      'forSale': [this.currentWoodburning.forSale, Validators.required],
      'sellingPrice': [this.currentWoodburning.sellingPrice], // TODO: should only be required if for sale is true
      'sold': [this.currentWoodburning.sold],
      'etsyListing': [this.currentWoodburning.etsyListing] // TODO: Should only be required if for sale is true
    });
  }

  editWoodburning(): void {
    if (!this.form.valid) {
      const message = 'Not all fields were entered. Fill out required.';
      this.woodburningStoreService.openSnackBar(message, '');
    } else {
      const woodburningFormData = {
        id: this.currentWoodburning.id,
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
      this.woodburningStoreService.update(woodburningFormData);
      // TODO: Handle error message if something goes wrong with the update - success will currently always be shown
      const message = 'Successfully edited ' + woodburningFormData.title + '.';
      this.woodburningStoreService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
