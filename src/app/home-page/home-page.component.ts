import { Component, OnInit } from '@angular/core';
import { CreateWoodburningComponent } from '../create-woodburning/create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    selector: 'home-page'
})

export class HomePageComponent implements OnInit {

  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;
  isLoggedIn$$: BehaviorSubject<boolean>;

  constructor(private dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$$ = this.authService.userIsLoggedIn$$;
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }

  logout(): void {
    this.authService.logout();
  }
}
