import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
    templateUrl: './create-woodburning.component.html',
    styleUrls: ['./create-woodburning.component.scss'],
    selector: 'create-woodburning'
})

export class CreateWoodburningComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
  }
}
