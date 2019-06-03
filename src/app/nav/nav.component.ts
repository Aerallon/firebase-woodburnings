import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { AppUser } from '../interfaces';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    selector: 'nav-bar'
})

export class NavComponent implements OnInit, OnDestroy {

  isLoggedIn$$: BehaviorSubject<boolean>;
  isAdmin: boolean;
  currentUser: AppUser;
  userProfileDialogRef: MatDialogRef<UserProfileComponent>;
  loginDialogRef: MatDialogRef<LoginComponent>;
  private subscriptions: Subscription[] = [];

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$$ = this.authService.userIsLoggedIn$$;
    // I believe this errors on logout...
    this.subscriptions.push(this.userService.get(
      this.userService.currentUser.id).subscribe( user => {
        this.currentUser = user;
        this.isAdmin = user.isAdmin;
      })
    );
  }

  public accessAdmin(goingToAdmin: boolean): void {
    if (this.isLoggedIn$$.getValue() === true) {
      this.router.navigate(['/admin-home']);
    }
    else {
      this.openLoginDialog(goingToAdmin);
    }
  }

  public openEditUserProfileDialog(): void {
    this.userProfileDialogRef = this.dialog.open(UserProfileComponent, {width: '500px'});
    this.userProfileDialogRef.componentInstance.user = this.currentUser;
  }

  public openLoginDialog(goingToAdmin: boolean): void {
    this.loginDialogRef = this.dialog.open(LoginComponent, {width: '500px'});
    this.loginDialogRef.componentInstance.goingToAdmin = goingToAdmin;
  }

  logout(): void {
    this.authService.logout();
    location.reload(true);
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
    });
  }
}
