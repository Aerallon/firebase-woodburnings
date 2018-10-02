import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { WoodburningDetails } from './woodburning-store.service';

@Component({
    templateUrl: './create-woodburning.component.html',
    styleUrls: ['./create-woodburning.component.scss'],
    selector: 'create-woodburning'
})

export class CreateWoodburningComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CreateWoodburningComponent>) {
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
      'sharedOnline': ['', Validators.required],
      'framed': ['', Validators.required],
      'forSale': ['', Validators.required],
      'sellingPrice': ['', Validators.required],
      'sold': ['', Validators.required]
    });
  }

  createWoodburning(): void {
    console.log('Creating Woodburning');
    this.close();
  }

  close(): void {
      this.dialogRef.close();
  }
}
