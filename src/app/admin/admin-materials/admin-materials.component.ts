import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddMaterialComponent } from './add-material/add-material.component';

@Component({
    templateUrl: './admin-materials.component.html',
    styleUrls: ['./admin-materials.component.scss'],
    selector: 'admin-materials'
})

export class AdminMaterialsComponent {

  addMaterialDialogRef: MatDialogRef<AddMaterialComponent>;

  constructor(private dialog: MatDialog) {
  }

  openAddMaterialDialog(): void {
    this.addMaterialDialogRef = this.dialog.open(AddMaterialComponent, { width: '500px' });
  }
}
