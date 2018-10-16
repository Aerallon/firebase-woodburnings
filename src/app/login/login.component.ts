import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { GoogleAuthProviderResponse } from '../core/auth';
import { UserService } from '../user.service';
import { AppUser } from '../interfaces';

@Component({
  selector: 'woodburning-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
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
        const user = {
          id: profile.id,
          email: profile.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          displayName: profile.given_name + ' ' + profile.family_name,
          profileImageUrl: profile.picture,
          isDeleted: false
        };
        // if the user doesn't exists already - I don't think this is working... I'm not getting users in my database
        if (!this.userService.get(user.id)) {
          this.userService.add(user as AppUser).subscribe();
        }
      });
  }

  handleLogin(): void {
    this.router.navigate(['/home']);
  }
}
