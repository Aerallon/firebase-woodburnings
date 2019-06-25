import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWoodburningsComponent } from './admin/admin-woodburnings/admin-woodburnings.component';
import { AuthGuard } from './core/auth-guard.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { AdminMapLocationsComponent } from './admin/admin-map-locations/admin-map-locations.component';
import { AdminMaterialsComponent } from './admin/admin-materials/admin-materials.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

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
    component: AdminHomeComponent,
  },
  {
    path: 'admin-woodburnings',
    component: AdminWoodburningsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-map-locations',
    component: AdminMapLocationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-blogs',
    component: AdminBlogsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-materials',
    component: AdminMaterialsComponent,
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
