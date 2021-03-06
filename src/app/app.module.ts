import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminWoodburningsComponent } from './admin/admin-woodburnings/admin-woodburnings.component';
import { CreateWoodburningComponent } from './admin/admin-woodburnings/create-woodburning/create-woodburning.component';
import { EditWoodburningComponent } from './admin/admin-woodburnings/edit-woodburning/edit-woodburning.component';
import { ListWoodburningsComponent } from './admin/admin-woodburnings/list-woodburnings/list-woodburnings.component';
import { DeleteWoodburningComponent } from './admin/admin-woodburnings/delete-woodburning/delete-woodburning.component';
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
import { AddMapLocationsComponent } from './admin/admin-map-locations/add-map-location/add-map-location.component';
import { ListMapLocationsComponent } from './admin/admin-map-locations/list-map-locations/list-map-locations.component';
import { DeleteMapLocationComponent } from './admin/admin-map-locations/delete-map-location/delete-map-location.component';
import { UpdateMapLocationComponent } from './admin/admin-map-locations/update-map-location/update-map-location.component';
import { DeleteMaterialComponent } from './admin/admin-materials/delete-material/delete-material.component';
import { ListMaterialComponent } from './admin/admin-materials/list-material/list-material.component';
import { AddMaterialComponent } from './admin/admin-materials/add-material/add-material.component';
import { UpdateMaterialComponent } from './admin/admin-materials/update-material/update-material.component';
import { WriteBlogComponent } from './admin/admin-blogs/write-blog/write-blog.component';
import { ListBlogsComponent } from './admin/admin-blogs/list-blogs/list-blogs.component';
import { DeleteBlogComponent } from './admin/admin-blogs/delete-blog/delete-blog.component';
import { UpdateBlogComponent } from './admin/admin-blogs/update-blog/update-blog.component';
import { BlogService } from './admin/admin-blogs/blog.service';
import { MaterialService } from './admin/admin-materials/material.service';
import { MapLocationService } from './admin/admin-map-locations/map-location.service';
import { InteractiveMapComponent } from './admin/admin-map-locations/interactive-map/interactive-map.component';
import { AgmCoreModule } from '@agm/core';


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
    AddMapLocationsComponent,
    ListMapLocationsComponent,
    DeleteMapLocationComponent,
    UpdateMapLocationComponent,
    AddMaterialComponent,
    ListMaterialComponent,
    DeleteMaterialComponent,
    UpdateMaterialComponent,
    WriteBlogComponent,
    ListBlogsComponent,
    DeleteBlogComponent,
    UpdateBlogComponent,
    InteractiveMapComponent,
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
    MatGridListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQSAkdg37hx_opO70Dr7I2qfxCs-7YW7U'
    })
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    WoodburningStoreService,
    AuthService,
    AuthGuard,
    UserService,
    BlogService,
    MaterialService,
    MapLocationService
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
    AddMapLocationsComponent,
    ListMapLocationsComponent,
    DeleteMapLocationComponent,
    UpdateMapLocationComponent,
    AddMaterialComponent,
    ListMaterialComponent,
    DeleteMaterialComponent,
    UpdateMaterialComponent,
    WriteBlogComponent,
    ListBlogsComponent,
    DeleteBlogComponent,
    UpdateBlogComponent,
    InteractiveMapComponent,
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
    AddMapLocationsComponent,
    ListMapLocationsComponent,
    DeleteMapLocationComponent,
    UpdateMapLocationComponent,
    AddMaterialComponent,
    ListMaterialComponent,
    DeleteMaterialComponent,
    UpdateMaterialComponent,
    WriteBlogComponent,
    ListBlogsComponent,
    DeleteBlogComponent,
    UpdateBlogComponent,
    InteractiveMapComponent,
  ]
})
export class AppModule { }
