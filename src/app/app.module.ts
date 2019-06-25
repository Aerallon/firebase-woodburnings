import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminWoodburningsComponent } from './admin/admin-woodburnings/admin-woodburnings.component';
import { CreateWoodburningComponent } from './admin/create-woodburning/create-woodburning.component';
import { EditWoodburningComponent } from './admin/edit-woodburning/edit-woodburning.component';
import { ListWoodburningsComponent } from './admin/list-woodburnings/list-woodburnings.component';
import { DeleteWoodburningComponent } from './admin/delete-woodburning/delete-woodburning.component';
import { PreviewWoodburningComponent } from './preview-woodburning/preview-woodburning.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WoodburningStoreService } from './woodburning-store.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth-guard.service';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule, MatInputModule, MatButtonModule, MatSliderModule,
  MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatDatepickerModule,
  MatNativeDateModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatIconModule,
  MatMenuModule, MatGridListModule
} from '@angular/material';
import { NavModule } from './nav/nav.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { AdminMapLocationsComponent } from './admin/admin-map-locations/admin-map-locations.component';
import { AdminMaterialsComponent } from './admin/admin-materials/admin-materials.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AdminWoodburningsComponent,
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent,
    DeleteWoodburningComponent,
    PreviewWoodburningComponent,
    LoginComponent,
    UserProfileComponent,
    AboutMeComponent,
    ContactMeComponent,
    ForSaleComponent,
    GalleryComponent,
    BlogComponent,
    AdminBlogsComponent,
    AdminMapLocationsComponent,
    AdminMaterialsComponent,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    CoreModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    AppRoutingModule,
    NavModule,
    HomePageModule,
    MatGridListModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    WoodburningStoreService,
    AuthService,
    AuthGuard,
    UserService
  ],
  exports: [
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent,
    DeleteWoodburningComponent,
    PreviewWoodburningComponent,
    LoginComponent,
    UserProfileComponent,
    AboutMeComponent,
    ContactMeComponent,
    ForSaleComponent,
    GalleryComponent,
    BlogComponent,
    AdminBlogsComponent,
    AdminMapLocationsComponent,
    AdminMaterialsComponent,
    AdminHomeComponent,
  ],
  entryComponents: [
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent,
    DeleteWoodburningComponent,
    PreviewWoodburningComponent,
    LoginComponent,
    UserProfileComponent,
    AboutMeComponent,
    ContactMeComponent,
    ForSaleComponent,
    GalleryComponent,
    BlogComponent,
    AdminBlogsComponent,
    AdminMapLocationsComponent,
    AdminMaterialsComponent,
    AdminHomeComponent,
  ]
})
export class AppModule { }
