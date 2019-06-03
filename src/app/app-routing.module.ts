import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AuthGuard } from './core/auth-guard.service';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
  {
    path: 'admin-home',
    component: AdminHomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
