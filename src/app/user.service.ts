import { Injectable } from '@angular/core';
import { AppUser } from './interfaces';
import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private firestoreService: FirestoreService) {
  }

  public get(userId: string): Observable<AppUser> {
    return this.firestoreService.get<AppUser>(`users/${userId}`);
  }

  public add(appUser: AppUser): Observable<null> {
    return this.firestoreService.add('users', appUser);
  }

  public update(appUser: AppUser): Observable<null> {
    return this.firestoreService.update(`users/${appUser.id}`, appUser);
  }

  public get currentUser(): AppUser {
    try {
      return JSON.parse(localStorage.getItem('currentUser'));
    } catch (err) {
      console.log('Missing user');
      return null;
    }
  }

  public checkIfAdmin(): boolean {
    const currentUser = this.currentUser;
    if (currentUser.isAdmin === true ) {
      return true;
    } else {
      return false;
    }
  }
}
