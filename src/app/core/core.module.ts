import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService]
})
export class CoreModule {
}
