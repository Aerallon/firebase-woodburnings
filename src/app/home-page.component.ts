import { Component } from '@angular/core';
import { CreateWoodburningComponent } from './create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    selector: 'home-page'
})

export class HomePageComponent {

  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;

  constructor(private dialog: MatDialog) {
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }
}
