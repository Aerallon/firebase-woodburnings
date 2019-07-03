import { Component, Input, OnInit } from '@angular/core';
import { MaterialDetails } from '../../../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MaterialService } from '../material.service';

@Component({
    templateUrl: './update-material.component.html',
    styleUrls: ['./update-material.component.scss'],
    selector: 'update-material'
})

export class UpdateMaterialComponent implements OnInit {

  @Input() material: MaterialDetails;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UpdateMaterialComponent>,
              private materialService: MaterialService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      'type': [this.material.type, Validators.required],
      'height': [this.material.height, Validators.required],
      'width': [this.material.width, Validators.required],
      'shape': [this.material.shape, Validators.required],
      'imageUrl': [this.material.imageUrl, Validators.required],
      'quantity': [this.material.quantity, Validators.required],
      'bought': [this.material.bought],
      'purchasePrice': [this.material.purchasePrice],
      'purchaseLocation': [this.material.purchaseLocation],
    });
  }

  updateMaterial(): void {
    if (this.form.valid) {
      const materialFormData = {
        id: this.material.id,
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
      this.materialService.update(materialFormData);
      // TODO: Handle error message if something goes wrong with the update - success will currently always be shown
      const message = 'Successfully updated ' + materialFormData.type + '.';
      this.materialService.openSnackBar(message, '');
      this.dialogRef.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
