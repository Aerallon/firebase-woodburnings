import { Component } from '@angular/core';
import { CreateWoodburningComponent } from './create-woodburning.component';
import { MatDialog } from '@angular/material';
import { EditWoodburningComponent } from './edit-woodburning.component';
import { ListWoodburningsComponent } from './list-woodburnings.component';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    selector: 'home-page'
})

export class HomePageComponent {
  constructor(private dialog: MatDialog) {
  }

  public openCreateWoodburningDialog(): void {
    console.log('openCreateWoodburningDialog');
    this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }

  // public openEditWoodburningDialog(): void {
  //   console.log('openEditWoodburningDialog');
  //   this.dialog.open(EditWoodburningComponent, { width: '500px' });
  // }
}
