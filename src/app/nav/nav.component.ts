import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { AppUser } from '../interfaces';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  selector: 'nav-bar'
})

export class NavComponent implements OnInit, OnDestroy {

  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  currentUser$: Observable<AppUser>;
  currentUser: AppUser;

  userProfileDialogRef: MatDialogRef<UserProfileComponent>;
  loginDialogRef: MatDialogRef<LoginComponent>;

  private subscriptions: Subscription[] = [];

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.currentUser$ = this.authService.userId.pipe(
      switchMap(uid => {
        if (!uid) {
          return of(null);
        }
        return this.userService.listen(uid);
      }),
      shareReplay(1),
    );

    this.isAdmin$ = this.currentUser$.pipe(map(user => user && user.isAdmin));

    this.subscriptions.push(this.currentUser$.subscribe(user => {
        this.currentUser = user;
      })
    );
  }

  public openEditUserProfileDialog(): void {
    this.userProfileDialogRef = this.dialog.open(UserProfileComponent, {width: '500px'});
    this.userProfileDialogRef.componentInstance.user = this.currentUser;
  }

  public openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginComponent, {width: '400px'});
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
