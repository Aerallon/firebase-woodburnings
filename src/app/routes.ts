import {Routes} from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  }
];
