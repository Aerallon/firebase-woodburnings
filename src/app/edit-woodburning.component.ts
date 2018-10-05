import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { WoodburningStoreService } from './woodburning-store.service';
import { WoodburningDetails } from './interfaces';
// import { firestore } from 'firebase';

@Component({
    templateUrl: './edit-woodburning.component.html',
    styleUrls: ['./edit-woodburning.component.scss'],
    selector: 'edit-woodburning'
})

export class EditWoodburningComponent implements OnInit {

  form: FormGroup;

  woodburningInfo: BehaviorSubject <WoodburningDetails> = new BehaviorSubject <WoodburningDetails>({
    id: '',
    title: '',
    size: '',
    material: '',
    // dateFinished: firestore.Timestamp,
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
              public dialogRef: MatDialogRef<EditWoodburningComponent>,
              private woodburningStoreService: WoodburningStoreService) {
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
    // Will need to do a get for the doc ID and then pass it on below
    // Hardcoded to the butterfly one in the meantime
    // const id = this.woodburningStoreService.get();

    const woodburningFormData = {
      id: 'BRNhjBiolRvPS3agyx9X', // TODO: Figure out how to get current woodburning id
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

    this.woodburningStoreService.update(woodburningFormData);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
