import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatGridList
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavModule } from '../nav/nav.module';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
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
    NavModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HomePageComponent
  ],
  entryComponents: [
    HomePageComponent
  ]
})
export class HomePageModule { }

