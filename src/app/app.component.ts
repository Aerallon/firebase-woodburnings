import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './core/auth.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

/** The base component that bootstraps angular */
export class AppComponent implements OnInit {

  isLoggedIn$$: BehaviorSubject<boolean>;

  constructor( private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$$ = this.authService.userIsLoggedIn$$;
  }
}
