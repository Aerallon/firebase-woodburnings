import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { WoodburningDetails } from './woodburning-store.service';

@Component({
    templateUrl: './edit-woodburning.component.html',
    styleUrls: ['./edit-woodburning.component.scss'],
    selector: 'edit-woodburning'
})

export class EditWoodburningComponent implements OnInit {

  form: FormGroup;

  woodburningInfo: BehaviorSubject <WoodburningDetails> = new BehaviorSubject <WoodburningDetails>({
    title: '',
    size: '',
    material: '',
    dateFinished: '',
    totalTimeTakenMinutes: 0,
    totalTimeTakenHours: 0,
    imageUrl: '',
    sharedOnline: false,
    framed: false,
    forSale: false,
    sellingPrice: 0,
    sold: false
  });

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditWoodburningComponent>) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'title': [this.woodburningInfo.getValue().title, Validators.required],
      'size': [this.woodburningInfo.getValue().size, Validators.required],
      'material': [this.woodburningInfo.getValue().material, Validators.required],
      'dateFinished': [this.woodburningInfo.getValue().dateFinished, Validators.required],
      'totalTimeTakenMinutes': [this.woodburningInfo.getValue().totalTimeTakenMinutes, Validators.required],
      'totalTimeTakenHours': [this.woodburningInfo.getValue().totalTimeTakenHours, Validators.required],
      'imageUrl': [this.woodburningInfo.getValue().imageUrl, Validators.required],
      'sharedOnline': [this.woodburningInfo.getValue().sharedOnline, Validators.required],
      'framed': [this.woodburningInfo.getValue().framed, Validators.required],
      'forSale': [this.woodburningInfo.getValue().forSale, Validators.required],
      'sellingPrice': [this.woodburningInfo.getValue().sellingPrice], // should only be required if for sale is true
      'sold': [this.woodburningInfo.getValue().sold, Validators.required]
    });
  }

  updateWoodburning(): void {
    console.log('Editing Woodburning');
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
