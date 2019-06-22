import { Component } from '@angular/core';
import { CreateWoodburningComponent } from '../../create-woodburning/create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './admin-woodburnings.component.html',
    styleUrls: ['./admin-woodburnings.component.scss'],
    selector: 'admin-home-page'
})

export class AdminWoodburningsComponent {

  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;

  constructor(private dialog: MatDialog) {
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }
}
