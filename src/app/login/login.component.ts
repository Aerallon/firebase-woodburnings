import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { GoogleAuthProviderResponse } from '../core/auth';
import { UserService } from '../user.service';
import { AppUser } from '../interfaces';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'woodburning-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() goingToAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.handleLogin();
        }
      });
  }

  login(): void {
    this.authService.login()
      .subscribe((profile: GoogleAuthProviderResponse) => {
        const userProfile = {
          id: profile.id,
          email: profile.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          displayName: profile.given_name + ' ' + profile.family_name,
          profileImageUrl: profile.picture,
          isDeleted: false,
          isAdmin: false
        };
        this.userService.get(userProfile.id).subscribe(user => {
          if (user === undefined) {
            this.userService.add(userProfile as AppUser).subscribe();
          }
          if (this.goingToAdmin) {
            this.router.navigate(['/admin-home']);
          }
        });
      });
    this.dialogRef.close();
  }

  handleLogin(): void {
    this.router.navigate(['/home']);
  }
}
