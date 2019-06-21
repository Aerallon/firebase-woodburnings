import { Component } from '@angular/core';
import { CreateWoodburningComponent } from '../create-woodburning/create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './admin-home-page.component.html',
    styleUrls: ['./admin-home-page.component.scss'],
    selector: 'admin-home-page'
})

export class AdminHomePageComponent {

  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;

  constructor(private dialog: MatDialog) {
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }
}
