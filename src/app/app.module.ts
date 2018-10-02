import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
// import { CreateWoodburningComponent } from './create-woodburning.component';
// import { EditWoodburningComponent } from './edit-woodburning.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    // CreateWoodburningComponent
    // EditWoodburningComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    // CreateWoodburningComponent,
    // EditWoodburningComponent
  ],
  entryComponents: [
    // CreateWoodburningComponent,
    // EditWoodburningComponent
  ]
})
export class AppModule { }
