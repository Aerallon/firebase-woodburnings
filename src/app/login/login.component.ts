import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { UserService } from '../user.service';
import { AppUser } from '../interfaces';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'woodburning-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.authService.isLoggedIn.subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.handleLogin();
        }
      })
    );
  }

  async login(): Promise<void> {
    const profile = await this.authService.login().pipe(first()).toPromise();
    const uid = await this.authService.userId.pipe(filter(Boolean), first()).toPromise();
    const userProfile = {
      id: uid,
      email: profile.email,
      firstName: profile.given_name,
      lastName: profile.family_name,
      displayName: profile.given_name + ' ' + profile.family_name,
      profileImageUrl: profile.picture,
      isDeleted: false,
      isAdmin: false
    };

    try {
      await this.userService.add(userProfile as AppUser).pipe(first()).toPromise();
    } catch (error) {
      console.error(`Got error when adding user: ${error}. Attempting to update the user instead.`);
      await this.userService.update(userProfile);
    }

    this.dialogRef.close();
  }

  handleLogin(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
