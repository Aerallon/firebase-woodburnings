import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { AppUser } from '../../interfaces';
import { UserService } from '../../user.service';

@Component({
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
    selector: 'admin-home'
})

export class AdminHomeComponent implements OnInit, OnDestroy {

  isLoggedIn$: Observable<boolean>;

  currentUser$: Observable<AppUser>;
  currentUser: AppUser;

  isAdmin$: Observable<boolean>;

  loginDialogRef: MatDialogRef<LoginComponent>;

  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthService,
              private router: Router,
              private dialog: MatDialog,
              private userService: UserService) {
    //
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
    this.subscriptions.push(this.currentUser$.subscribe(user => {this.currentUser = user;}));

    this.isAdmin$ = this.currentUser$.pipe(map(user => user && user.isAdmin));
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
