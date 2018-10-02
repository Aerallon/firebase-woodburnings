import { Component } from '@angular/core';
import { CreateWoodburningComponent } from './create-woodburning.component';
import { MatDialog } from '@angular/material';

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
}
