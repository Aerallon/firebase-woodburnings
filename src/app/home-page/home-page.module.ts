import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
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
    NavModule
  ],
  exports: [
    HomePageComponent
  ],
  entryComponents: [
    HomePageComponent
  ]
})
export class HomePageModule { }

