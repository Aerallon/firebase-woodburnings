import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { WoodburningDetails, WoodburningStoreService } from './woodburning-store.service';
import { stringify } from 'querystring';
import { FirestoreService } from './firestore.service';

@Component({
    templateUrl: './create-woodburning.component.html',
    styleUrls: ['./create-woodburning.component.scss'],
    selector: 'create-woodburning'
})

export class CreateWoodburningComponent implements OnInit {

  woodburning = {
    title: 'Ornate Butterfly',
    size: "8' x 10'",
    material: 'Russian Birch',
    dateFinished: stringify(new Date('December 10, 2018')),
    totalTimeTakenMinutes: 120,
    totalTimeTakenHours: 2,
    framed: true,
    forSale: true,
    sold: false,
    sellingPrice: 60,
    sharedOnline: true,
    imageUrl: 'https://google.com'
  };

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
      'framed': [false],
      'forSale': [false],
      'sellingPrice': [''], // should only be required if for sale is true
      'sold': [false]
    });
  }

  createWoodburning(): void {
    console.log('Creating Woodburning');
    const woodburningId = this.firestoreService.id();

    const woodburningFormData = {
      id: woodburningId,
      title: this.form.value.title,
      size: this.form.value.size,
      material: this.form.value.material,
      dateFinished: this.form.value.dateFinished,
      totalTimeTakenMinutes: this.form.value.totalTimeTakenMinutes,
      totalTimeTakenHours: this.form.value.totalTimeTakenHours,
      imageUrl: this.form.value.imageUrl,
      sharedOnline: this.form.value.sharedOnline,
      framed: this.form.value.framed,
      forSale: this.form.value.forSale,
      sellingPrice: this.form.value.sellingPrice,
      sold: this.form.value.sold
    };

    this.woodburningStoreService.add(woodburningFormData);
    this.dialogRef.close();
  }

  close(): void {
      this.dialogRef.close();
  }
}
