import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { BehaviorSubject, combineLatest, from as fromPromise, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoogleAuthProviderResponse } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  userId: Observable<string>;
  userIsLoggedIn$$ = new BehaviorSubject<boolean>(false);

  private userIsAuthed$: Observable<boolean>;

  constructor( private angularFireAuth: AngularFireAuth,
               private angularFirestore: AngularFirestore,
               private router: Router,
               private http: HttpClient ) {

    this.userIsAuthed$ = this.angularFireAuth.user.pipe(
      map(u => !!u)
    );

    this.userId = this.angularFireAuth.user.pipe(
      map(u => u ? u.providerData[0].uid : '')
    );
  }

  get isLoggedIn(): Observable<boolean> {
    return combineLatest(this.userIsAuthed$).pipe(
      map(([userIsAuthed]) => {
        const isLoggedIn = userIsAuthed;
        this.userIsLoggedIn$$.next(isLoggedIn);
        return isLoggedIn;
      })
    );
  }

  public login(): Observable<GoogleAuthProviderResponse> {
    return fromPromise(this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => {
        this.storeCurrentUser(response.additionalUserInfo.profile as GoogleAuthProviderResponse);
        return response.additionalUserInfo.profile as GoogleAuthProviderResponse;
      }));
  }

  public logout(): void {
    this.angularFireAuth.auth.signOut().then(
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

  private storeCurrentUser(profile: GoogleAuthProviderResponse): void {
    const user = {
      id: profile.id,
      email: profile.email,
      firstName: profile.given_name,
      lastName: profile.family_name,
      displayName: profile.given_name + ' ' + profile.family_name,
      profileImageUrl: profile.picture,
      isDeleted: false,
      isAdmin: false
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
