import { Component, OnInit } from '@angular/core';
import { CreateWoodburningComponent } from '../create-woodburning/create-woodburning.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserService } from '../user.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AppUser } from '../interfaces';

@Component({
    templateUrl: './admin-home-page.component.html',
    styleUrls: ['./admin-home-page.component.scss'],
    selector: 'admin-home-page'
})

export class AdminHomePageComponent implements OnInit {

  createWoodburningDialogRef: MatDialogRef<CreateWoodburningComponent>;
  userProfileDialogRef: MatDialogRef<UserProfileComponent>;
  isLoggedIn$$: BehaviorSubject<boolean>;
  isAdmin: boolean;
  currentUser: AppUser;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$$ = this.authService.userIsLoggedIn$$;
    this.userService.get(this.userService.currentUser.id).subscribe( user => {
      this.currentUser = user;
      this.isAdmin = user.isAdmin;
    });
  }

  public openEditUserProfileDialog(): void {
    this.userProfileDialogRef = this.dialog.open(UserProfileComponent, {width: '500px'});
    this.userProfileDialogRef.componentInstance.user = this.currentUser;
  }

  public openCreateWoodburningDialog(): void {
    this.createWoodburningDialogRef = this.dialog.open(CreateWoodburningComponent, { width: '500px' });
  }

  logout(): void {
    this.authService.logout();
  }
}
