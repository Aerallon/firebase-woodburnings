import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page.component';
import { CreateWoodburningComponent } from './create-woodburning.component';
import { EditWoodburningComponent } from './edit-woodburning.component';
import { ListWoodburningsComponent } from './list-woodburnings.component';
import { DeleteWoodburningComponent } from './delete-woodburning.component';
import { PreviewWoodburningComponent } from './preview-woodburning.component';
import { WoodburningStoreService } from './woodburning-store.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth-guard.service';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule, MatInputModule, MatButtonModule, MatSliderModule,
  MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatDatepickerModule,
  MatNativeDateModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatIconModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent,
    DeleteWoodburningComponent,
    PreviewWoodburningComponent,
    LoginComponent
  ],
  imports: [
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
    RouterModule.forRoot(routes),
    HttpClientModule
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
    LoginComponent
  ],
  entryComponents: [
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent,
    DeleteWoodburningComponent,
    PreviewWoodburningComponent,
    LoginComponent
  ]
})
export class AppModule { }
