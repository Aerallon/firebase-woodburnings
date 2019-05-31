import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    NavComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavComponent
  ],
  entryComponents: [
    NavComponent
  ]
})
export class NavModule { }
