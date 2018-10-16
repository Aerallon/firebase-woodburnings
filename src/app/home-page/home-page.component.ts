import { Component, OnInit } from '@angular/core';
import { CreateWoodburningComponent } from '../create-woodburning/create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserService } from '../user.service';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    selector: 'home-page'
})

export class HomePageComponent implements OnInit {

  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;
  isLoggedIn$$: BehaviorSubject<boolean>;
  isAdmin: boolean;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$$ = this.authService.userIsLoggedIn$$;
    this.isAdmin = this.userService.checkIfAdmin();
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }

  logout(): void {
    this.authService.logout();
  }
}
