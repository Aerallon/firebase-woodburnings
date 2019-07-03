import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FirestoreService } from '../../../firestore.service';
import { MaterialService } from '../material.service';

@Component({
    templateUrl: './add-material.component.html',
    styleUrls: ['./add-material.component.scss'],
    selector: 'add-material'
})

export class AddMaterialComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddMaterialComponent>,
              private materialService: MaterialService,
              private firestoreService: FirestoreService) {
    //
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'type': ['', Validators.required],
      'height': ['', Validators.required],
      'width': ['', Validators.required],
      'shape': ['', Validators.required],
      'imageUrl': ['', Validators.required],
      'quantity': ['', Validators.required],
      'bought': [false, Validators.required],
      'purchasePrice': [''], //TODO: Required if bought
      'purchaseLocation': [''], //TODO: Required if bought
    });
  }

  addMaterial(): void {
    if (this.form.valid) {
      const materialFormData = {
        id: this.firestoreService.id,
        type: this.form.value.type,
        height: this.form.value.height,
        width: this.form.value.width,
        shape: this.form.value.shape,
        imageUrl: this.form.value.imageUrl,
        quantity: this.form.value.quantity,
        bought: this.form.value.bought,
        purchasePrice: this.form.value.purchasePrice,
        purchaseLocation: this.form.value.purchaseLocation,
      };
      this.materialService.add(materialFormData);
      // TODO: Have this or an error message show if the service isn't successful
      const message = 'Successfully added new material.';
      this.materialService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
      this.dialogRef.close();
  }
}
