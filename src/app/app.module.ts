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
import { WoodburningStoreService } from './woodburning-store.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule, MatSliderModule,
         MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatDatepickerModule,
         MatNativeDateModule, MatTableModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
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
    MatDividerModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    WoodburningStoreService
  ],
  exports: [
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent
  ],
  entryComponents: [
    CreateWoodburningComponent,
    EditWoodburningComponent,
    ListWoodburningsComponent
  ]
})
export class AppModule { }
