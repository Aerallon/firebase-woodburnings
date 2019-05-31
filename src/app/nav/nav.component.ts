import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    selector: 'nav-bar'
})

export class NavComponent implements OnInit {

  isLoggedIn$$: BehaviorSubject<boolean>;

  constructor( private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$$ = this.authService.userIsLoggedIn$$;
  }
}
